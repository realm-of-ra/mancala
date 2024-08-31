import avatar from "@/assets/avatar.png";
import twitter from "@/assets/twitter.png";
import telegram from "@/assets/telegram.png";
import image from "@/assets/image-add.svg";
import { Link } from "react-router-dom";
import { FormEventHandler, useRef, useState } from "react";
import { Dialog } from "@material-tailwind/react";

export default function UserSection() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const ref: any = useRef();
    const handleOpen = () => setOpen(!open);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };
    return (
        <div className="w-[350px] h-[500px] bg-[url('./assets/long-box.png')] bg-contain bg-no-repeat py-8 px-6 overflow-x-hidden">
            <div className="w-full h-full space-y-5">
                <div className="flex flex-row items-center space-x-5">
                    <img src={avatar} width={80} height={80} className="rounded-full border-2 border-[#4B505C]" />
                    <div>
                        <h3 className="text-3xl text-[#CBCDD6] font-medium">Cumberlord</h3>
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
                        <p className="font-medium text-white">Level 12</p>
                        <p className="font-medium text-white">12/200</p>
                    </div>
                    <div className="w-full h-4 bg-gradient-to-r from-[#555868] to-[#1A1C24] rounded-full">
                        <div className="w-[30%] h-full bg-[#FAB580] rounded-full" />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-medium text-[#BDC2CC]">Total Played</p>
                        <p className="font-medium text-white">124</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-medium text-[#BDC2CC]">Total Won</p>
                        <p className="font-medium text-white">101</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-medium text-[#BDC2CC]">Total Lost</p>
                        <p className="font-medium text-white">23</p>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <p className="font-medium text-white">Share</p>
                    <div className="flex flex-row items-center space-x-1.5">
                        <Link to="/">
                            <img src={twitter} width={35} height={35} />
                        </Link>
                        <Link to="/">
                            <img src={telegram} width={35} height={35} />
                        </Link>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                dismiss={{
                    enabled: true
                }}
                className="flex flex-col items-center justify-center bg-transparent"
            >
                <div className="w-[700px] h-[450px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat px-16 py-8">
                    <div className="w-full h-[380px]">
                        <div className="w-full h-full space-y-5 flex flex-col justify-center">
                            <div className="flex flex-row items-center justify-between">
                                <div className="space-y-2.5">
                                    <h6 className="text-3xl text-white font-bold">Profile Photo</h6>
                                    <p className="text-[#667185] w-64 text-lg font-medium">This image will be displayed on your profile</p>
                                    <button className="flex flex-row items-center justify-center space-x-0.5 border-2 border-[#F56630] py-2 px-3.5 rounded-md" onClick={() => ref.current.click()} onChange={handleImageChange as FormEventHandler<HTMLButtonElement>}>
                                        <img src={image} width={25} height={25} alt="add photo" />
                                        <input src="" type="file" className="hidden" ref={ref} />
                                        <span className="text-[#F56630] font-semibold">Change Photo</span>
                                    </button>
                                </div>
                                <img src={ref?.current?.files[0] ? URL.createObjectURL(ref.current.files[0]) : avatar} width={100} height={100} className="rounded-full border-2 border-[#4B505C] w-28 h-28" />
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-5">
                                <div className="space-y-2.5">
                                    <h6 className="text-3xl text-white font-bold">Display Name</h6>
                                    <p className="text-[#667185] w-64 text-lg font-medium">This name will be displayed on your profile</p>
                                </div>
                                <input className="w-full py-3.5 bg-transparent border-2 border-[#4B505C] rounded-xl focus-visible:outline-none px-1.5 text-white text-xl" />
                            </div>
                            <div className="w-full flex flex-row items-center justify-center">
                                <button className="bg-[#F58229] py-1.5 rounded-lg text-[#FCE3AA] font-semibold w-52">
                                    Edit details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}