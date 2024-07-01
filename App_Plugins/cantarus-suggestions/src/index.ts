import { UmbEntryPointOnInit } from "@umbraco-cms/backoffice/extension-api";
import { ManifestTypes } from "@umbraco-cms/backoffice/extension-registry";
import { manifests as propertyManifests } from "./property-editors/manifest";

const manifests: Array<ManifestTypes> = [...propertyManifests];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
  extensionRegistry.registerMany(manifests);
};
