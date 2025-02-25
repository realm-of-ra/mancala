import logo from "../assets/logo.png";
import link from "../assets/link-out.png";
import { Link } from "react-router-dom";
import Bubble from "@/components/ui/svgs/bubble";
import small_logo from "@/assets/small-logo.png";

export default function Home() {
  return (
    <div className="bg-[#0F1116] bg-[url('./assets/bg.png')] bg-cover bg-center w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-[url('./assets/home-box.png')] bg-cover bg-center bg-no-repeat w-[874px] h-[486px] flex flex-col items-center justify-center space-y-20">
        <img src={logo} alt="logo" className="w-56 h-16" />
        <div className="flex flex-col space-y-5 text-center">
          <Link to="/lobby">
            <button className="bg-[#1A1D25] text-[#F58229] py-2.5 px-7 rounded-full flex flex-row items-center justify-center space-x-1">
              <Bubble />
              <p>Go to lobby</p>
            </button>
          </Link>
          <Link
            to="/"
            className="flex flex-row items-center justify-center space-x-1"
          >
            <p className="text-[#C7CAD4]">Learn more</p>
            <img src={link} width={16} height={16} alt="link" />
          </Link>
        </div>
      </div>
      <img
        src={small_logo}
        alt="logo"
        className="w-24 h-16 absolute bottom-5"
      />
    </div>
  );
}
