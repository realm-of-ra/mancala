import manifest from "../contracts/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala/torii",
  masterAddress:
    "0x70db2adccadd984b16676dec668d39d3fac9e65fd368222c0d47e234fdde7d4",
  masterPrivateKey:
    "0x6f9c267cbd5825905828c4dc06edf348768a157176d10ca2a98770064f5c648",
});
