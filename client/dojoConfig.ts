import manifest from "../contracts/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala/torii",
  masterAddress:
    "0x6d5530ec2165401daec7062186a74a7311f1ec6de29eb3a6d9e187435b8faa1",
  masterPrivateKey:
    "0x1b13dbd252d90b07a504c29a6660d5597c62132284665ff6f1580a40d532110",
});
