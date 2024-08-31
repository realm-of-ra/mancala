import Header from "@/components/header";
import UserSection from "@/components/profile/user-section";

export default function Profile() {
    return (
        <div className="w-full h-screen bg-[#15181E] space-y-8 fixed">
            <Header />
            <div className="flex flex-row items-center justify-center">
                <div className="w-full flex flex-row items-start justify-center space-x-10">
                    <UserSection />
                    <div className="w-[874px] h-[874px] bg-[url('./assets/wide-box.png')] bg-contain bg-no-repeat p-8 overflow-x-hidden"></div>
                </div>
            </div>
        </div>
    )
}