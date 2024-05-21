import logo from "../assets/logo.png";
import link from "../assets/link-out.png";
export default function Home() {
  return (
    <div className="bg-[#0F1116] w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-[url('./assets/home-box.png')] bg-cover bg-center bg-no-repeat w-[874px] h-[486px] flex flex-col items-center justify-center space-y-20">
          <img src={logo} alt="logo" className="w-56 h-16" />
        <div className="flex flex-col space-y-2 text-center">
              <a href="/lobby">
                  <button className="bg-[#1A1D25] text-[#F58229] py-2.5 px-7 rounded-full">
              Go to lobby
            </button>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center space-x-1"
          >
                  <p className="text-[#C7CAD4]">Learn more</p>
            <img src={link} width={16} height={16} alt="link" />
          </a>
        </div>
      </div>
      <p className="text-[#C7CAD4] absolute bottom-5">by Realm of Ra Studios</p>
    </div>
  );
}
