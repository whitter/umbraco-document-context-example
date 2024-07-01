import type { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/extension-registry";

const dashboards: Array<ManifestPropertyEditorUi> = [
  {
    type: "propertyEditorUi",
    name: "Suggestions",
    alias: "Cantarus.PropertyEditor.Suggestions",
    element: () => import("./suggestions.property"),
    elementName: "cantarus-property-suggestions",
    meta: {
      label: "Suggestions",
      icon: "icon-autofill",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
    },
  },
];

export const manifests = [...dashboards];
