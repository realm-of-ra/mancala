import manifest from "../contract/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
    manifest,
});
