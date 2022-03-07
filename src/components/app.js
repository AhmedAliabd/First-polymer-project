import { LitElement, html } from "@polymer/lit-element";
class TodoApp extends LitElement {
  static get properties() {
    return {
      todoList: Array,
    };
  }
  constructor() {
    super();
    this.todoList = [{ text: "do hw", completed: false }];
  }

  render() {
    return html`<h1>To Do</h1>
      <ul>
        ${this.todoList.map(
          (item) =>
            html`<li
              id=${"YFG" + new Date().getUTCMilliseconds().toString()}
              @click=${this.delete}
            >
              ${item.text}
            </li>`
        )}
      </ul>
      <input id="newitem" />
      <button @click=${this.addTodo}>Add</button> `;
  }

  input() {
    return this.shadowRoot.querySelector("#newitem");
  }
  delete(e) {
    console.log(e.target.id);
    const element = this.shadowRoot.querySelector(`#${e.target.id}`);
    console.log(element.textContent);
    //this.todoList = this.todoList.filter((item) => item !== e.target.value);
    //console.log(this.todoList);
    //this.requestUpdate();
  }
  addTodo() {
    this.todoList.push({ text: this.input().value, completed: false });
    this.input().value = "";
    this.requestUpdate();
  }
}

customElements.define("todo-app", TodoApp);
