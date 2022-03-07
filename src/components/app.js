import { LitElement, html } from "@polymer/lit-element";
import "./button";
class TodoApp extends LitElement {
  static get properties() {
    return {
      todoList: Array,
    };
  }
  constructor() {
    super();
    this.todoList = [];
  }

  render() {
    return html`<h1>Hello</h1>
      <my-button></my-button>`;
  }
}

customElements.define("todo-app", TodoApp);
