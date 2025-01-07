import twitter from "@/assets/twitter.png";
import telegram from "@/assets/telegram.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { getColorOfTheDay, truncateString, uploadFile } from "@/lib/utils";
import { useAccount } from "@starknet-react/core";
import useControllerData from "@/hooks/useControllerData";
import { UserIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@material-tailwind/react";
import image from "@/assets/image-add.svg";
import avatar from "@/assets/avatar.png";
import { useDojo } from "@/dojo/useDojo";

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
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState<{ status: string; finished: boolean }>(
    { status: "", finished: false },
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { system } = useDojo();
  const account = useAccount();
  const controllerData = useControllerData();
  const url = window.location.href;
  const color = getColorOfTheDay(account.address || "", new Date());

  const handleOpen = () => setOpen(!open);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files?.[0];
      const url = await uploadFile(file as File);
      setSelectedImage(URL.createObjectURL(event.target.files[0]) || url);
      setImageUrl(url);
    }
  };

  const handleSaveProfile = async () => {
    if (account.account) {
      const userExists = profiles.mancalaDevProfileModels.edges.some(
        (profile: any) => profile.node.address === account.account?.address,
      );

      if (userExists) {
        const imageUrlToUse = imageUrl || "https://localhost:3000/avatar.png";
        system.update_player_profile(
          account.account,
          displayName,
          imageUrlToUse,
          setLoading,
        );
      } else {
        system.create_player_profile(account.account, displayName, setLoading);
      }
    }
  };

  return (
    <div className="w-[350px] h-[500px] bg-[url('./assets/long-box.png')] bg-contain bg-no-repeat py-8 px-6 overflow-x-hidden">
      <div className="w-full h-full space-y-5">
        <div className="flex flex-row items-center space-x-5">
          {controllerData?.icon ? (
            <img
              src={controllerData?.icon}
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
              {controllerData?.username ||
                truncateString(account.account?.address) ||
                "Guest user"}
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
            <p className="font-medium text-white">{level}/100</p>
          </div>
          <div className="w-full h-4 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full">
            <div
              className="h-full bg-[#FAB580] rounded-full"
              style={{
                width: `${(level / 100) * 100}%`,
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
        <div className="space-y-1.5">
          <p className="font-medium text-white">Share</p>
          <div className="flex flex-row items-center space-x-1.5">
            <Link
              to={`http://x.com/share?text=Check out my profile on mancala&url=${url}?address=${account.account?.address}`}
            >
              <img src={twitter} width={35} height={35} />
            </Link>
            <Link
              to={`https://telegram.me/share/url?url=${url}?address=${account.account?.address}&text=Check out my profile on mancala`}
            >
              <img src={telegram} width={35} height={35} />
            </Link>
          </div>
        </div>

        <Dialog
          open={open}
          handler={handleOpen}
          dismiss={{ enabled: true }}
          className="flex flex-col items-center justify-center bg-transparent"
        >
          <div className="w-[700px] h-[450px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat px-16 py-8">
            <div className="w-full h-[380px]">
              <div className="w-full h-full space-y-5 flex flex-col justify-center">
                <div className="flex flex-row items-center justify-between">
                  <div className="space-y-2.5">
                    <h6 className="text-3xl text-white font-bold">
                      Profile Photo
                    </h6>
                    <p className="text-[#667185] w-64 text-lg font-medium">
                      This image will be displayed on your profile
                    </p>
                    <button
                      className="flex flex-row items-center justify-center space-x-0.5 border-2 border-[#F56630] py-2 px-3.5 rounded-md"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <img src={image} width={25} height={25} alt="add photo" />
                      <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                      <span className="text-[#F56630] font-semibold">
                        Change Photo
                      </span>
                    </button>
                  </div>
                  <img
                    src={selectedImage || avatar}
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-[#4B505C] w-28 h-28"
                    alt="Profile"
                  />
                </div>
                <div className="flex flex-row items-center justify-between space-x-5">
                  <div className="space-y-2.5">
                    <h6 className="text-3xl text-white font-bold">
                      Display Name
                    </h6>
                    <p className="text-[#667185] w-64 text-lg font-medium">
                      This name will be displayed on your profile
                    </p>
                  </div>
                  <input
                    className="w-full py-3.5 bg-transparent border-2 border-[#4B505C] rounded-xl focus-visible:outline-none px-2.5 text-white text-xl"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter display name"
                  />
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
        </Dialog>
      </div>
    </div>
  );
}
