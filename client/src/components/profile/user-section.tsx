import avatar from "@/assets/avatar.png";
import twitter from "@/assets/twitter.png";
import telegram from "@/assets/telegram.png";
import { Link } from "react-router-dom";

export default function UserSection() {
    return (
        <div className="w-[350px] h-[500px] bg-[url('./assets/long-box.png')] bg-contain bg-no-repeat py-8 px-6 overflow-x-hidden">
            <div className="w-full h-full space-y-5">
                <div className="flex flex-row items-center space-x-5">
                    <img src={avatar} width={80} height={80} className="rounded-full border-2 border-[#4B505C]" />
                    <div>
                        <h3 className="text-3xl text-[#CBCDD6] font-medium">Cumberlord</h3>
                        <button className="text-[#F58229] font-medium">
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
        </div>
    )
}