import CONFIG from "@/lib/config";
import manifest from "../contracts/manifest_sepolia.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: CONFIG.RPC_URL,
  toriiUrl: CONFIG.TORII_URL,
  masterAddress: CONFIG.MASTER_ADDRESS,
  masterPrivateKey: CONFIG.MASTER_PRIVATE_KEY,
});
