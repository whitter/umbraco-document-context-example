import { html, customElement } from "@umbraco-cms/backoffice/external/lit";
import type { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { UMB_DOCUMENT_WORKSPACE_CONTEXT } from "@umbraco-cms/backoffice/document";

@customElement("cantarus-property-suggestions")
export class CantarusPropertySuggestions
  extends UmbLitElement
  implements UmbPropertyEditorUiElement
{
  #workspaceContext?: typeof UMB_DOCUMENT_WORKSPACE_CONTEXT.TYPE;

  constructor() {
    super();

    this.consumeContext(UMB_DOCUMENT_WORKSPACE_CONTEXT, (instance) => {
      this.#workspaceContext = instance;
    });
  }

  #click() {
    this.#workspaceContext?.setPropertyValue("text", "test suggestion");
  }

  override render() {
    return html`<uui-button
      pristine=""
      type="button"
      style=""
      look="primary"
      color="default"
      label="Suggest Content"
      @click=${this.#click}
    ></uui-button>`;
  }
}

export default CantarusPropertySuggestions;

declare global {
  interface HTMLElementTagNameMap {
    "cantarus-property-suggestions": CantarusPropertySuggestions;
  }
}
