import manifest from "../contracts/manifests/sepolia/deployment/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia",
  toriiUrl: "https://api.cartridge.gg/x/mancala-alpha-v13/torii",
  masterAddress:
    "0x6f3c5e9f3161c9b2545d8a0a08183df56e6e9adcd04864c31e591b6c8343afe",
  masterPrivateKey:
    "0x503b610edf67c295099d5184f75159e0e9e044940c86db2e10d07595ecc6e3c",
});
