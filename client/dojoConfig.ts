import manifest from "../contracts/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala/torii",
  masterAddress:
    "0x895235a21ada3de80b96e9d884c37a091959c0ba57de6228a7e5281b92412e",
  masterPrivateKey:
    "0x4de2ed8a2db222d7a8c2f7b8fba2562dcab06ab63abf836c0293fcb20e92059",
});
