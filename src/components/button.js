import { LitElement, html } from "@polymer/lit-element";

export class Button extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<button>Click me</button>`;
  }
}
customElements.define("my-button", Button);
