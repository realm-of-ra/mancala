import mancala_duels_logo from "../../assets/mancala_duels.png";

export default function EmptyDuels({ message }: { message: string }) {
  return (
    <div className="bg-[#0F1116] bg-contain bg-center bg-no-repeat border-2 border-[#272A32] rounded-2xl w-[928px] h-[437px] flex flex-col items-center justify-center">
      <div className="w-full h-[500px] flex flex-col items-center justify-center">
        <img
          src={mancala_duels_logo}
          alt="duels"
          className="w-24 h-24 mx-auto"
        />
        <h6 className="text-[#BDC2CC] font-bold text-lg mt-1.5">{message}</h6>
        <button className="text-[#4F5666] text-sm">
          Create a game to play
        </button>
      </div>
    </div>
  );
}
