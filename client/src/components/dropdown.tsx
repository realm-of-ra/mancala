import { Link } from "react-router-dom";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const filters = ["Duel requests", "Duels created", "Games won", "Games lost"];

export default function Dropdown() {
  return (
    <div className="absolute top-1/2 right-8 font-medium transform translate-y-6 w-[200px] mt-2 border border-[#272A32] bg-[#171922] text-[#BFC5D4] rounded-xl shadow-xl z-20">
      {filters.map((filter, i) => (
        <div
          key={i}
          className="flex flex-row gap-2 items-center w-full px-4 py-3 rounded-xl  bg-[#171922] hover:bg-[#272A32] hover:bg-opacity-50 cursor-pointer transition duration-300 ease-in-out"
        >
          <Checkbox
            className="w-4 h-4 rounded-[2px] border border-[#C7CAD4]"
            id={filter}
          />
          <Label
            htmlFor="requests"
            className="text-base font-normal text-[#C7CAD4]"
          >
            {filter}
          </Label>
        </div>
      ))}
    </div>
  );
}
