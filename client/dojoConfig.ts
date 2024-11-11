import manifest from "../contracts/manifest_dev.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala-v0-2-0/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala-v0-2-0/torii",
  masterAddress:
    "0x750c685f8aa993c936e6c27c9eac06bf53e8d9598f415f8ef8be4b3b7fe3564",
  masterPrivateKey:
    "0x70ad8637e1cd652646ca2625ef4eaa6038d521426d6d44959faf9e080097c6f",
});
