import { useState, useRef, useEffect } from "react";
import { getColorOfTheDay, truncateString, uploadFile } from "@/lib/utils";
import { useAccount, useConnect } from "@starknet-react/core";
import useControllerData from "@/hooks/useControllerData";
import { UserIcon } from "@heroicons/react/24/solid";
import image from "@/assets/image-add.svg";
import avatar from "@/assets/square-avatar.png";
import { useDojo } from "@/dojo/useDojo";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import UsersPlus from "../ui/svgs/users-plus";
import { Twitter } from "lucide-react";
import { useQuery } from "@apollo/client";
import { MancalaPlayerNames } from "@/lib/constants";
import { shortString } from "starknet";
import ControllerConnector from "@cartridge/connector/controller";

export default function UserSection({
  level,
  wins,
  losses,
  total,
  profiles,
}: {
  level: number;
  wins: number;
  losses: number;
  total: number;
  profiles: any;
}) {
  const { data: playerData, startPolling: startPollingPlayerData } = useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const [playerName, setPlayerName] = useState("");
  const [playerImage, setPlayerImage] = useState("");

  const account = useAccount();
  useEffect(() => {
    const profile: any = playerData?.mancalaAlphaProfileModels?.edges.find(
      (player: any) => player.node.address === account?.account?.address,
    );
    if (!account?.address || !profile) {
      setPlayerName("");
      setPlayerImage("");
      return;
    }

    if (profile?.node?.name) {
      const decodedName = shortString.decodeShortString(profile?.node?.name || "");
      setPlayerName(decodedName);
      setDisplayName(decodedName);
    }
    if (profile?.node?.profile_uri) {
      const profileUri = profile?.node?.profile_uri || "";
      setPlayerImage(profileUri);
      setSelectedImage(profileUri);
      setImageUrl(profileUri);
    }
  }, [account?.address, playerData?.mancalaAlphaProfileModels?.edges, playerData, account?.account?.address]);

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(playerImage);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState<{ status: string; finished: boolean }>(
    { status: "", finished: false },
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { system } = useDojo();
  const url = window.location.href;
  const color = getColorOfTheDay(account.address || "", new Date());
  const [imageLoading, setImageLoading] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files?.[0];
      setImageLoading(true);

      // Set selected image preview immediately
      setSelectedImage(URL.createObjectURL(event.target.files[0]));

      try {
        const url = await uploadFile(file as File);
        setImageUrl(url);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Optionally handle error state here
      } finally {
        setImageLoading(false);
      }
    }
  };

  const handleSaveProfile = async () => {
    if (account.account) {
      const userExists = profiles.mancalaAlphaProfileModels.edges.some(
        (profile: any) => profile.node.address === account.account?.address,
      );

      if (userExists) {
        system.update_player_profile(
          account.account,
          displayName,
          imageUrl,
          setLoading,
        );
      } else {
        system.create_player_profile(account.account, displayName, setLoading);
      }
    }
  };

  const handleShareInvite = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join me on Mancala",
          text: "Hey! Come play Mancala with me!",
          url: url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open(
        `https://twitter.com/intent/tweet?text=Join me on Mancala! ${url}`,
        "_blank",
      );
    }
  };

  const { connectors } = useConnect();
  const controller = connectors[0] as ControllerConnector;
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const fetchUsername = async () => {
      const name = await controller?.username();
      setUsername(name || "");
    };

    fetchUsername();
  }, [controller]);

  return (
    <div className="w-[400px] h-[450px] bg-[#0F1116] rounded-xl p-14 overflow-x-hidden">
      <div className="w-full h-full space-y-5">
        <div className="flex flex-row items-center space-x-5">
          {playerImage !== "" ? (
            <img
              src={playerImage}
              width={80}
              height={80}
              className="rounded-full border-2 border-[#4B505C]"
            />
          ) : (
            <div
              className="flex items-center justify-center rounded-full p-2.5"
              style={{ backgroundColor: color }}
            >
              <UserIcon color="#F58229" className="w-10 h-10 text-white" />
            </div>
          )}
          <div>
            <h3 className="text-2xl text-[#CBCDD6] font-medium">
              {playerName || username}
            </h3>
            <button className="text-[#F58229] font-medium" onClick={handleOpen}>
              Edit details
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-1.5">
          <div className="w-full h-1 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full" />
          <div className="w-full h-1 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full" />
          <div className="w-full h-1 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full" />
          <div className="w-full h-1 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full" />
          <div className="w-full h-1 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full" />
        </div>
        <div className="space-y-3.5">
          <div className="flex flex-row items-center justify-between">
            <p className="font-medium text-white">Level {level}</p>
            <p className="font-medium text-white">
              {level.toString().padStart(2, "0")}/25
            </p>
          </div>
          <div className="w-full h-4 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full">
            <div
              className="h-full bg-[#FAB580] rounded-full"
              style={{
                width: `${(level / 25) * 100}%`,
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-medium text-[#BDC2CC]">Total Played</p>
            <p className="font-medium text-white">{total}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-medium text-[#BDC2CC]">Total Won</p>
            <p className="font-medium text-white">{wins}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-medium text-[#BDC2CC]">Total Lost</p>
            <p className="font-medium text-white">{losses}</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3.5">
          <button
            className="flex flex-row items-center space-x-1.5 bg-[#171922] rounded-md py-2 px-3.5"
            onClick={handleShareInvite}
          >
            <UsersPlus />
            <p className="font-medium text-[#BFC5D4] text-sm">Invite Friend</p>
          </button>
          <button
            className="flex flex-row items-center space-x-1.5 bg-[#171922] rounded-md py-2 px-3.5"
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=Check out my profile on Mancala on ${url}`,
                "_blank",
              );
            }}
          >
            <Twitter fill="#BFC5D4" color="#BFC5D4" size={16} />
            <p className="font-medium text-[#BFC5D4] text-sm">Share</p>
          </button>
        </div>

        <Dialog
          open={open}
          onClose={handleOpen}
          className="fixed inset-0 z-50 bg-transparent shadow-none flex items-center justify-center"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />
          <DialogPanel
            transition
            className="relative flex flex-col items-center justify-center transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-[#0F1116] border-2 border-[#272A32] rounded-2xl p-16">
              <div className="space-y-5">
                <div className="space-y-5 flex flex-col justify-center">
                  <div className="space-y-2.5">
                    <h6 className="text-xl text-white font-bold">
                      Display Name
                    </h6>
                    <p className="text-[#667185] text-base font-medium">
                      This name will be displayed on your profile
                    </p>
                    <input
                      className="w-full py-3.5 bg-transparent border border-[#4B505C] rounded-xl focus-visible:outline-none px-2.5 text-white text-lg"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Enter display name"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between space-x-5">
                    <div className="space-y-2.5">
                      <h6 className="text-xl text-white font-bold">
                        Profile Photo
                      </h6>
                      <p className="text-[#667185] text-base font-medium">
                        This image will be displayed on your profile
                      </p>
                      <button
                        className="flex flex-row items-center justify-center space-x-0.5 border-2 border-[#F56630] py-2 px-3.5 rounded-md"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <img
                          src={image}
                          width={20}
                          height={20}
                          alt="add photo"
                        />
                        <input
                          type="file"
                          className="hidden"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                        <span className="text-[#F56630] font-semibold text-sm">
                          Change Photo
                        </span>
                      </button>
                    </div>
                    <img
                      src={selectedImage || avatar}
                      width={100}
                      height={100}
                      className={`rounded-lg border-2 border-[#4B505C] w-28 h-28 ${
                        imageLoading ? "opacity-50" : ""
                      }`}
                      alt="Profile"
                    />
                    {imageLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F58229]" />
                      </div>
                    )}
                  </div>
                  <div className="w-full flex flex-row items-center justify-center">
                    <button
                      className="bg-[#F58229] py-1.5 rounded-lg text-[#FCE3AA] font-semibold w-52"
                      onClick={handleSaveProfile}
                    >
                      {loading.status === "CREATING" && !loading.finished
                        ? "Saving..."
                        : loading.status === "CREATED" && loading.finished
                          ? "Saved"
                          : "Save Changes"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  );
}
