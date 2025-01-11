import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { useCallback } from "react";
import { useAccount } from "@starknet-react/core";

export const ControllerTrophy = () => {
  const { connector } = useAccount() as { connector: { controller?: any } };
  const handleTrophyClick = useCallback(() => {
    if (!connector?.controller) {
      console.error("Connector not initialized");
      return;
    }
    connector?.controller.openProfile("achievements");
  }, [connector]);

  return (
    <Button variant="outline" onClick={() => handleTrophyClick()}>
      <Trophy />
    </Button>
  );
};
