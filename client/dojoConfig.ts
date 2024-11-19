import manifest from "../contracts/manifest_sepolia.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl:
    "https://starknet-sepolia.blastapi.io/ab914dde-4484-4558-9c2b-bf20aa43c1a3/rpc/v0_7",
  toriiUrl: "https://api.cartridge.gg/x/mancala-sepolia-alpha/torii",
  masterAddress:
    "0x02A54eFf65D55a2E7D2fC7E23eF0F0e6030dB0313b16c8F0eaD0b4a83807f6d6",
  masterPrivateKey:
    "0x0396533b7a1182ef03da483eca82e9dd2b17bee9c7fec07ac6cbbeb8bfd573cb",
});
