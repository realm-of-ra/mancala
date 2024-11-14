import manifest from "../contracts/manifest_dev.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala-alpha-v0-2-0/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala-alpha-v0-2-0/torii",
  masterAddress:
    "0x7c7e6bcfcb1b408dcef95241681739207d3d8eff5439c9301847222e12dc053",
  masterPrivateKey:
    "0x3eb97d72f148146d534d7e6dabdeba45c5bd62c4355db2a41735f847967db1b",
});
