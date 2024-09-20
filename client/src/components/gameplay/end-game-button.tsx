import { end } from "@/constants/icons_store";
import { Button } from "@material-tailwind/react";

export default function EndgameButton() {
    return(
        <div className="space-y-1">
          <Button className="p-0 bg-transparent rounded-full">
            <img
              src={end}
              width={75}
              height={75}
              alt="end game"
              className="rounded-full"
            />
          </Button>
          <p className="text-lg text-[#656C7D] font-medium text-center">
            End
          </p>
        </div>
    )
}