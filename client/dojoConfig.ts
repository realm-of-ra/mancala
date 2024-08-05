import manifest from "../contracts/manifests/dev/deployment/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala-alpha/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala/torii",
  masterAddress:
    "0x3aca8ec786e4fb873b03dca73e13578e977e75d9fe3c2a8c230b3f925293775",
  masterPrivateKey:
    "0x3eb4aee4fd2a31d10b46eba5c5b367646d7b0d2fa10d2d64d2bad573ab43f14",
});
