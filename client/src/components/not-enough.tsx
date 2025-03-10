import { Dialog } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import MintIcon from "./ui/svgs/mint";
import { useAccount, useContract, useSendTransaction } from "@starknet-react/core";
import { nft_abi } from "@/abi"

export default function NotEnough({ isEnough, refetch }: { isEnough: boolean, refetch: any }) {
  const [open, setOpen] = useState(!isEnough);
  const handleOpen = () => setOpen(open);
  const nft_contract_address = "0x00c489b121fdc7bf7aa71167d603de7d41184576b6ed1bae87dd7b448c4ac8cf";
  const { address } = useAccount();
  const { contract } = useContract({ 
    abi: nft_abi, 
    address: nft_contract_address, 
  }); 
  const { data: mint_response, send } = useSendTransaction({
    calls: contract && address 
    ? [contract.populate("mint_pass", [address])] 
    : undefined,
  });

  const handleMint = () => {
    setOpen(true);
    send();
  }

  useEffect(() => {
    if (mint_response?.transaction_hash) {
      refetch();
    }
  }, [mint_response, refetch]);
  return (
    <div className="">
      <Dialog
        open={open}
        handler={handleOpen}
        className="flex flex-col items-center justify-center bg-transparent"
      >
        <div className="w-[575px] h-80 bg-[#0F1116] border-2 border-[#272A32] rounded-2xl p-8">
          <div className="w-full h-full flex flex-col items-center justify-center space-y-5">
            <h3 className="text-white font-semibold text-2xl">Missing Token</h3>
            <p className="text-center text-white text-lg font-medium">
              "This game is currently available to Mancala Pass NFT holders, click the "Mint Mancala Pass" button to mint a testnet pass.
            </p>
            <Button
              className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl"
              onClick={handleMint}
            >
              <div className="flex flex-row items-center space-x-1">
                <MintIcon />
                <p className="text-[#FCE3AA] font-semibold">Mint Token</p>
              </div>
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
