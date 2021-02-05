function validate(event) {
    console.log("input can be validated");
}
  
export class TextBox extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
      <style>
        input {
          width: 300px;
        }
      </style>
      `;
      const textbox = document.createElement("input");
      shadow.appendChild(textbox);
      textbox.addEventListener("input", validate);
      textbox.focus();
    }
  
    get value() {
      console.log("get");
      let textbox = this.shadowRoot.querySelector("input");
      return textbox.value;
    }
    set value(newValue) {
      console.log("set");
      let textbox = this.shadowRoot.querySelector("input");
      textbox.value = newValue;
    }
  }
  
  customElements.define('test-textbox', TextBox);
  
  const el = document.querySelector('test-textbox');
  el.addEventListener("input", (evt) => {
    console.log('input event from the outside.');
  });
  