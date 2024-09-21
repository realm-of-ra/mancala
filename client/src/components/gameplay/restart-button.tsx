import { restart } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";

export default function RestartButton() {
    return(
        <div className="space-y-1">
          <Button className="p-0 bg-transparent rounded-full">
            <img
              src={restart}
              width={75}
              height={75}
              alt="restart"
              className="rounded-full"
            />
          </Button>
          <p className="text-lg text-[#656C7D] font-medium text-center">
            Restart
          </p>
        </div>
    )
}