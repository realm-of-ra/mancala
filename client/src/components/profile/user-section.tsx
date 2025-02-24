import { useState, useRef, useEffect } from "react";
import { getColorOfTheDay, uploadFile } from "@/lib/utils";
import { useAccount, useConnect } from "@starknet-react/core";
import { UserIcon } from "@heroicons/react/24/solid";
import image from "@/assets/image-add.svg";
import avatar from "@/assets/square-avatar.png";
import { useDojo } from "@/dojo/useDojo";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import UsersPlus from "../ui/svgs/users-plus";
import { Twitter } from "lucide-react";
import { useQuery } from "@apollo/client";
import { MancalaPlayerNames } from "@/lib/constants";
import { shortString } from "starknet";
import ControllerConnector from "@cartridge/connector/controller";
import clsx from "clsx";

// Add a new type for save status
type SaveStatus = {
  status: "idle" | "saving" | "success" | "error";
  message: string;
};

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
  const { data: playerData, startPolling: startPollingPlayerData } =
    useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const [playerName, setPlayerName] = useState("");
  const [playerImage, setPlayerImage] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [displayName, setDisplayName] = useState("");
  const [initialDisplayName, setInitialDisplayName] = useState("");
  const [initialImageUrl, setInitialImageUrl] = useState("");

  const account = useAccount();

  useEffect(() => {
    const profile: any = playerData?.mancalaWindProfileModels?.edges.find(
      (player: any) => player.node.address === account?.account?.address,
    );
    if (!account?.address || !profile) {
      setPlayerName("");
      setPlayerImage("");
      return;
    }

    if (profile?.node?.name) {
      const decodedName = shortString.decodeShortString(
        profile?.node?.name || "",
      );
      const truncatedName =
        decodedName.length > 25
          ? `${decodedName.slice(0, 25)}...`
          : decodedName;
      setPlayerName(truncatedName);
      setDisplayName(truncatedName);
      setInitialDisplayName(truncatedName);
    }
    if (profile?.node?.profile_uri) {
      const profileUri = profile?.node?.profile_uri || "";
      setPlayerImage(profileUri);
      setSelectedImage(profileUri);
      setImageUrl(profileUri);
      setInitialImageUrl(profileUri);
    }
  }, [account?.account?.address, account?.address, playerData]);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<{ status: string; finished: boolean }>(
    { status: "", finished: false },
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { system } = useDojo();
  const url = window.location.href;
  const color = getColorOfTheDay(account.address || "", new Date());
  const [imageLoading, setImageLoading] = useState(false);

  // Add save status state
  const [saveStatus, setSaveStatus] = useState<SaveStatus>({
    status: "idle",
    message: "",
  });

  const handleOpen = () => {
    if (!open) {
      setDisplayName(initialDisplayName);
      setSelectedImage(initialImageUrl);
      setImageUrl(initialImageUrl);
    }
    setOpen(!open);
  };

  const handleClose = () => {
    setDisplayName(initialDisplayName);
    setSelectedImage(initialImageUrl);
    setImageUrl(initialImageUrl);
    setOpen(false);
  };

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
        setImageUrl(url?.original);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Optionally handle error state here
      } finally {
        setImageLoading(false);
      }
    }
  };

  const handleSaveProfile = async () => {
    if (!account.account) return;

    setSaveStatus({ status: "saving", message: "Saving changes..." });

    try {
      const userExists = profiles.mancalaWindProfileModels.edges.some(
        (profile: any) => profile.node.address === account.account?.address,
      );

      if (userExists) {
        await system.update_player_profile(
          account.account,
          displayName.toString(),
          imageUrl,
          setLoading,
        );
      } else {
        await system.create_player_profile(
          account.account,
          displayName.toString(),
          setLoading,
        );
      }

      setSaveStatus({
        status: "success",
        message: "Profile updated successfully!",
      });

      // Close dialog after successful save (after a brief delay to show success)
      setTimeout(() => {
        setOpen(false);
        setSaveStatus({ status: "idle", message: "" });
      }, 1500);
    } catch (error) {
      console.error("Save failed:", error);
      setSaveStatus({
        status: "error",
        message: "Failed to save changes. Please try again.",
      });
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
      </div>
    </div>
  );
}
