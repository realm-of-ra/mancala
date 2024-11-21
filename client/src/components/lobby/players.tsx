import { player_header, colors } from "../../lib/constants";
import { getPlayers, truncateString } from "../../lib/utils";
import { Card, Typography } from "@material-tailwind/react";
import { useProvider } from "@starknet-react/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { constants } from "starknet";
import { StarknetIdNavigator, StarkProfile } from "starknetid.js";
import PlayersSkeleton from "./players-skeleton";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Players({ data }: { data: any[] | undefined }) {
  const { provider } = useProvider();

  const starknetIdNavigator = new StarknetIdNavigator(
    provider,
    constants.StarknetChainId.SN_MAIN
  );

  // Extracting player_one and player_two from the data object
  const players = getPlayers(data);

  const addresses = players?.map((player: any) => player.address);

  const [profiles, setProfiles] = useState<StarkProfile[]>([]);

  useEffect(() => {
    if (!starknetIdNavigator || !addresses) return;
    (async () => {
      const data = await starknetIdNavigator?.getStarkProfiles(addresses);
      if (!data) return;
      setProfiles(data);
    })();
  }, [addresses]);

  return (
    <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
      <Card className="w-full h-full bg-transparent">
        <div className="w-full text-left bg-transparent table-auto">
          <div className="absolute h-[550px] w-[814px] overflow-x-clip overflow-y-scroll scrollbar">
            <table className="w-full text-left bg-transparent table-auto">
              <thead className="sticky -top-3.5 bg-[#0F1116] z-10">
                <tr>
                  {player_header.map((head, index) => (
                    <th
                      key={head.id}
                      className={clsx(
                        "p-4",
                        index === 0 ? "text-start" : "text-center"
                      )}
                    >
                      <Typography
                        variant="small"
                        className="font-medium leading-none text-[#BDC2CC]"
                      >
                        {head.name}
                      </Typography>
                    </th>
                  ))}
                </tr>
                <tr className="w-full border-b border-[#313640] h-1 absolute inset-x-0 top-10" />
              </thead>
              {players?.length ? (
                <tbody data-testid="players max-h-[450px] overflow-y-scroll overflow-x-clip">
                  <PlayersSkeleton />
                </tbody>
              ) : (
                <tbody>
                  <PlayersSkeleton />
                </tbody>
              )}
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
