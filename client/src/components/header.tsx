import { useEffect, useState, useCallback, SetStateAction, useRef } from "react";
import mancala from "../assets/logo.png";
import { useAccount, useBalance, useConnect, useDisconnect } from "@starknet-react/core";
import { Link, useNavigate } from "react-router-dom";
import { shortString } from "starknet";
import { Button } from "@material-tailwind/react";
import { Cog8ToothIcon, SpeakerXMarkIcon, TrophyIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@apollo/client";
import { MancalaHeaderQuery, MancalaPlayerNames } from "@/lib/constants";
import catridgeImage from "@/assets/controller.png";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { PencilIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { Slider } from "@/components/ui/slider"
import Logout from "./ui/svgs/logout";
import audio_url from "@/music/audio_1.mp4";
import { uploadFile } from "@/lib/utils";
import { XIcon } from "./ui/svgs/x-icon";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import ControllerConnector from "@cartridge/connector/controller";
import { useDojo } from "@/dojo/useDojo";
import image from "@/assets/image-add.svg";
import avatar from "@/assets/square-avatar.png";
import clsx from "clsx";

type SaveStatus = {
  status: 'idle' | 'saving' | 'success' | 'error';
  message: string;
};

export default function Header() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWallet = async () => {
    connect({ connector: connectors[0] });
  };
  const disconnectWallet = async () => {
    disconnect();
  };

  const { account, connector } = useAccount() as any;
  const controller = connectors[0] as ControllerConnector;
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      if (!controller) return;
      try {
        const name = await controller.username();
        setUsername(name || "");
      } catch (error) {
        console.error("Error fetching username:", error);
        setUsername("");
      }
    };

    if (account?.address) {
      fetchUsername();
    } else {
      setUsername(""); // Reset username when disconnected
    }
  }, [account?.address, controller]);

  const { data, startPolling } = useQuery(MancalaHeaderQuery);
  startPolling(1000);

  const { data: playerData, startPolling: startPollingPlayerData } =
    useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const profile: any = playerData?.mancalaAlphaProfileModels?.edges.find(
      (player: any) => player.node.address === account?.address,
    );
    if (!account || !profile) {
      setPlayerName("");
      return;
    }

    if (profile?.node?.name) {
      setPlayerName(shortString.decodeShortString(profile?.node?.name));
    }
  }, [
    account,
    playerData?.mancalaAlphaProfileModels?.edges,
    playerData,
  ]);
  
  const handleTrophyClick = useCallback(() => {
    if (!connector?.controller) {
      console.error("Connector not initialized");
      return;
    }
    connector?.controller.openProfile("achievements");
  }, [connector]);

  const navigate = useNavigate();

  //Get user STRK balance
  const { data: balanceData, error } = useBalance({
    address: account?.address,
    token: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
  });

  const [volume, setVolume] = useState(35);
  const [audio] = useState(new Audio(audio_url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.volume = volume / 100;
    if (volume === 0 && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else if (volume > 0 && !isPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  }, [volume, audio, isPlaying]);

  useEffect(() => {
    audio.loop = true;
    
    audio.addEventListener('ended', () => {
      audio.play().catch(console.error);
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio playback error:', e);
      setIsPlaying(false);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);
  startPollingPlayerData(1000);
  const [playerImage, setPlayerImage] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [displayName, setDisplayName] = useState("");
  const [initialDisplayName, setInitialDisplayName] = useState("");
  const [initialImageUrl, setInitialImageUrl] = useState("");

  useEffect(() => {
    const profile: any = playerData?.mancalaAlphaProfileModels?.edges.find(
      (player: any) => player.node.address === account?.address,
    );
    if (!account?.address || !profile) {
      setPlayerName("");
      setPlayerImage("");
      return;
    }

    if (profile?.node?.name) {
      const decodedName = shortString.decodeShortString(profile?.node?.name || "");
      const truncatedName = decodedName.length > 25 ? `${decodedName.slice(0, 25)}...` : decodedName;
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
  }, [account?.address, playerData]);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<{ status: string; finished: boolean }>(
    { status: "", finished: false },
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { system } = useDojo();
  const [imageLoading, setImageLoading] = useState(false);

  // Add save status state
  const [saveStatus, setSaveStatus] = useState<SaveStatus>({
    status: 'idle',
    message: ''
  });

  const { data: profiles, startPolling: startPollingProfiles } =
    useQuery(MancalaPlayerNames);
  startPollingProfiles(1000);

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
    console.log("account: ", account)
    if (!account) return;

    setSaveStatus({ status: 'saving', message: 'Saving changes...' });

    try {
      const userExists = profiles.mancalaAlphaProfileModels.edges.some(
        (profile: any) => profile.node.address === account?.address,
      );

      if (userExists) {
        await system.update_player_profile(
          account,
          displayName.toString(),
          imageUrl,
          setLoading,
        );
      } else {
        await system.create_player_profile(
          account, 
          displayName.toString(),
          setLoading
        );
      }

      setSaveStatus({ 
        status: 'success', 
        message: 'Profile updated successfully!' 
      });
      
      // Close dialog after successful save (after a brief delay to show success)
      setTimeout(() => {
        setOpen(false);
        setSaveStatus({ status: 'idle', message: '' });
      }, 1500);

    } catch (error) {
      console.error('Save failed:', error);
      setSaveStatus({ 
        status: 'error', 
        message: 'Failed to save changes. Please try again.' 
      });
    }
  };
  
  useEffect(() => {
    const fetchUsername = async () => {
      const name = await controller?.username();
      setUsername(name || "");
    };

    fetchUsername();
  }, [controller, setUsername]);
  
  console.log({
    playerName,
    username
  });

  return (
    <div className="flex flex-row items-center justify-between space-x-12 w-full">
      <div className="flex-1 w-full -mr-10" />
      <div className="h-[100px] w-[800px]">
        <div className="bg-[url('./assets/leaderboard-top.png')] w-[800px] h-[100px] bg-contain bg-no-repeat flex flex-col items-center justify-center">
          <Link to="/" className="mb-4">
            <img src={mancala} className="h-10 w-36" />
          </Link>
        </div>
      </div>
      <div className={"flex-1 w-full"}>
        <div className="flex flex-row space-x-2.5 items-center justify-start">
              {
                account?.address ? <Button
                className="font-medium relative flex flex-col justify-center items-center bg-[#171922] w-fit text-sm rounded-full p-0"
                onClick={handleTrophyClick}
              >
                <div className="flex flex-row items-center justify-center p-1.5 pl-5 pr-7 -space-x-1">
                  <img src={catridgeImage} className="w-12 h-12" />
                  <p className="text-[#FCE3AA]">
                    {playerName 
                      ? (playerName.length > 16 ? playerName.slice(0, 16) + "..." : playerName)
                      : (username.length > 16 ? username.slice(0, 16) + "..." : username)}
                  </p>
                </div>
              </Button> : <Button
                className="flex justify-between font-medium relative items-center bg-[#F58229] w-fit text-sm white whitespace-nowrap rounded-full"
                onClick={connectWallet}
              >
                <p className="text-[#FCE3AA]">Connect Wallet</p>
              </Button>
              }
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
                  <Button className="bg-[#171922] hover:bg-[#171922] border-none p-2.5 rounded-full shadow-none">
                    <Cog8ToothIcon className="w-6 h-6 text-[#DB8534]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-[#171922] hover:bg-[#171922] border-none text-[#BFC5D4] w-40"
                >
                  {
                    account?.address && <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#171922] bg-[#171922] p-0 font-medium" disabled>
                    <p className="px-1.5">Account</p>
                    <div className="mx-1 w-full pr-1.5 hover:cursor-pointer" onClick={() => setOpen(true)}>
                      <div className="flex flex-row items-center justify-between space-x-1">
                        <div className="flex flex-row items-center justify-start space-x-1">
                          <UserCircleIcon className="w-7 h-7 text-[#BFC5D4]" />
                          <p className="text-[#BFC5D4]">{playerName 
                            ? (playerName.length > 10 ? playerName.slice(0, 10) + "..." : playerName)
                            : (username.length > 10 ? username.slice(0, 10) + "..." : username)}
                          </p>
                        </div>
                        <PencilIcon className="w-5 h-5 text-[#BFC5D4]" />
                      </div>
                    </div>
                    <div className="bg-[#111419] mx-1 p-2 rounded-md flex flex-row items-center justify-start space-x-1">
                      <p>
                        {error ? "0.00" : balanceData?.formatted} {balanceData?.symbol}
                      </p>
                      <div className="bg-[url('./assets/sn.png')] bg-contain bg-no-repeat w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  }
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#171922] bg-[#171922] px-0 pb-0 font-medium" disabled>
                    <p className="px-3">Sounds</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#191b23] bg-[#171922] p-0 font-medium" disabled>
                    <div className="flex flex-row items-center justify-start space-x-1 mx-1 p-2 w-full">
                      <div className="flex flex-row items-center justify-start space-x-1 w-full">
                        {volume > 0 ? <SpeakerWaveIcon className="w-5 h-5 text-white" /> : <SpeakerXMarkIcon className="w-5 h-5 text-white" />}
                        <Slider defaultValue={[volume]} max={100} step={5} color="#FFFFFF" onValueChange={(value: SetStateAction<number>[]) => setVolume(value[0])} />
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#191b23] bg-[#171922] px-0 font-medium">
                    <Link to="https://x.com/realm_of_ra" target="_blank">
                      <div className="flex flex-row items-center justify-start space-x-2 px-3">
                        <XIcon />
                        <p className="text-white">Follow on X</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#191b23] bg-[#171922] px-0 font-medium" onClick={account?.address ? disconnectWallet : connectWallet}>
                      <button className="flex flex-row items-center justify-start space-x-1 px-3 text-[#F58229]">
                        <Logout />
                        <p>{account?.address ? "Disconnect" : "Connect Wallet"}</p>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
        </div>
      </div>
        <Dialog
          open={open}
          onClose={handleClose}
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
                        <div className="animate-spin-slow rounded-full h-8 w-8 border-b-2 border-[#F58229]" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    {/* Add status message */}
                    {saveStatus.message && (
                      <div className={clsx(
                        "text-center p-2 rounded",
                        saveStatus.status === 'saving' && "bg-transparent border-2 border-[#4B505C] text-[#4B505C]",
                        saveStatus.status === 'success' && "bg-green-100 text-green-700",
                        saveStatus.status === 'error' && "bg-red-100 text-red-700"
                      )}>
                        {saveStatus.message}
                      </div>
                    )}

                    <div className="w-full flex flex-row items-center justify-center space-x-4">
                      <button
                        className={"py-1.5 rounded-lg font-semibold w-52 bg-[#F58229] text-[#FCE3AA] hover:bg-[#E47218]"}
                        onClick={handleSaveProfile}
                        disabled={saveStatus.status === 'saving'}
                      >
                        {saveStatus.status === 'saving' ? (
                          <div className="flex items-center justify-center space-x-2 bg-[#F58229] text-[#FCE3AA] hover:bg-[#E47218]">
                            <div className="animate-spin-slow rounded-full h-4 w-4 border-b-2 border-white" />
                            <span>Saving...</span>
                          </div>
                        ) : "Save Changes"}
                      </button>
                      <button
                        className="bg-[#272A32] py-1.5 rounded-lg text-[#BDC2CC] font-semibold w-52 hover:bg-[#1E2128]"
                        onClick={handleClose}
                        disabled={saveStatus.status === 'saving'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </div>
  );
}
