import manifest from "../contracts/manifest_dev.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: "https://api.cartridge.gg/x/mancala-rc-test/katana",
  toriiUrl: "https://api.cartridge.gg/x/mancala-rc-test/torii",
  masterAddress:
    "0x68344c60413f55bb7390e8ef5ca86fbecae0b168f87a91eebade2f47ec414b8",
  masterPrivateKey:
    "0x17d99a9091ec1f925137baab87f5c149c1eae160b8d04117b2dac7795ce4374",
});
