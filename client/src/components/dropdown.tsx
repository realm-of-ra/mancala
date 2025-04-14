import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const filters = ["Duel requests", "Duels created", "Games won", "Games lost"];

export default function Dropdown() {
  return (
    <div className="absolute top-1/2 right-8 font-medium transform translate-y-6 w-[200px] mt-2 border border-[#272A32] bg-[#171922] text-[#BFC5D4] rounded-xl shadow-xl z-20">
      {filters.map((filter, i) => {
        const rounded =
          i === 0
            ? "rounded-t-xl"
            : i === filters.length - 1
              ? "rounded-b-xl"
              : "rounded-none";
        return (
          <button
            key={i}
            className={`${rounded} flex flex-row gap-2 items-center w-full px-4 py-3 bg-[#171922] hover:bg-[#272A32] hover:bg-opacity-50 cursor-pointer transition duration-300 ease-in-out`}
          >
            <Checkbox
              className="w-4 h-4 rounded-[2px] border border-[#C7CAD4]"
              id={filter}
            />
            <label
              htmlFor={filter}
              className="text-base font-normal text-[#C7CAD4] cursor-pointer"
            >
              {filter}
            </label>
          </button>
        );
      })}
    </div>
  );
}
