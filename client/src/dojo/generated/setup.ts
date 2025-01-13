import { getSyncEntities } from "@dojoengine/state";
import { DojoConfig, DojoProvider } from "@dojoengine/core";
import * as torii from "@dojoengine/torii-client";
import { createClientComponents } from "../createClientComponents";
import { createSystemCalls } from "../createSystemCalls";
import { defineContractComponents } from "./contractComponents";
import { world } from "./world";
import { setupWorld } from "./generated";
import { ArraySignatureType } from "starknet";
import { setupBurnerManager } from "@dojoengine/create-burner";

export type SetupResult = Awaited<ReturnType<typeof setup>>;

export type SetupStatus = {
  toriiClient: boolean;
  contractComponents: boolean;
  syncEntities: boolean;
  dojoProvider: boolean;
  worldSetup: boolean;
  burnerManager: boolean;
};

export async function setup({ ...config }: DojoConfig, 
  onStatusUpdate?: (status: Partial<SetupStatus>) => void) {
  
  try {
    onStatusUpdate?.({ toriiClient: true });
    const toriiClient = await torii.createClient({
      rpcUrl: config.rpcUrl,
      toriiUrl: config.toriiUrl,
      relayUrl: "",
      worldAddress: config.manifest.world.address || "",
    });
    onStatusUpdate?.({ toriiClient: false, contractComponents: true });

    const contractComponents = defineContractComponents(world);
    const clientComponents = createClientComponents({ contractComponents });
    onStatusUpdate?.({ contractComponents: false, syncEntities: true });

    await getSyncEntities(
      toriiClient,
      contractComponents as never,
      undefined,
      []
    );
    
    onStatusUpdate?.({ syncEntities: false, dojoProvider: true });

    const dojoProvider = new DojoProvider(config.manifest, config.rpcUrl);
    onStatusUpdate?.({ dojoProvider: false, worldSetup: true });

    const client = await setupWorld(dojoProvider);
    onStatusUpdate?.({ worldSetup: false, burnerManager: true });

    const burnerManager = await setupBurnerManager(config);

    onStatusUpdate?.({ burnerManager: false });

    return {
      client,
      clientComponents,
      contractComponents,
      systemCalls: createSystemCalls({ client }, clientComponents),
      publish: (typedData: string, signature: ArraySignatureType) => {
        toriiClient.publishMessage(typedData, signature);
      },
      config,
      dojoProvider,
      burnerManager,
      toriiClient,
    };
  } catch (error) {
    console.error("Setup failed:", error);
    throw error;
  }
}
