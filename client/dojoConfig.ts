import manifest from "../contracts/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
	manifest,
	rpcUrl: "https://api.cartridge.gg/x/mancala/katana",
	toriiUrl: "https://api.cartridge.gg/x/mancala/torii",
});
