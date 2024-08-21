import manifest from "../contracts/manifests/dev/deployment/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala-alpha-v3/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala-alpha-v3/torii",
  masterAddress:
    "0x6d8a4c8c7830004f53371b56773278e0ab107fc10ecffb008a33ad84c5f2175",
  masterPrivateKey:
    "0x5d2e95d7477224d35cd3b1ffe50c1631573e21b71977605177528acfc4b8598",
});
