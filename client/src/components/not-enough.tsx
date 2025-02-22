import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { BellIcon } from "@heroicons/react/24/solid";

export default function NotEnough({ isEnough }: { isEnough: boolean }) {
    const [open, setOpen] = useState(!isEnough);
    const handleOpen = () => setOpen(open);
    return(
        <div className="">
            <Dialog
                open={open}
                handler={handleOpen}
                className="flex flex-col items-center justify-center bg-transparent"
            >
                <div className="w-[575px] h-80 bg-[#0F1116] border-2 border-[#272A32] rounded-2xl p-8">
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-5">
                        <h3 className="text-white font-semibold text-2xl">Missing Token</h3>
                        <p className="text-center text-white text-lg font-medium">This Game is currently available to the general public, Input an email address to be notified when available to all users</p>
                        <input placeholder="Input Email Address" className="w-full p-3.5 bg-[#1A1E25] rounded-lg outline-none text-white" />
                        <Button className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl" onClick={() => {
                            setOpen(open);
                            if (window.location.pathname === "/") {
                                setOpen(false)
                            } else {
                                window.location.href === "/"
                            }
                        }}>
                              <div className="flex flex-row items-center space-x-1">
                                <BellIcon className="text-[#FCE3AA] w-6 h-6" />
                                <p className="text-[#FCE3AA] font-semibold">
                                  Get Notified
                                </p>
                              </div>
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}