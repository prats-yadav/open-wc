import {LitElement,html,css} from 'lit-element';

export class QueryingDom extends LitElement {
  static get properties() {
    return {
      webSeries: { type: Array }
    };
  }
  get title() {
      return this.shadowRoot.getElementById("title");
    }

  get director(){
    return this.shadowRoot.getElementById("director");
  }

  constructor() {
    super();
    this.webSeries = [{title:"steve",director:"Director"}];
  }


  render() {
    return html`
      <input id="title" name="titlename" />
      <input id="director" name="directorname" />
      <button @click="${() => this._addUsername()}">Add user</button>
      <ul>
        ${this.webSeries.map(
          user => html`
            <li>${user}</li>
          `
        )}
      </ul>
    `;
  }

  _addUsername() {
    console.log(this.title.value);
    this.webSeries = [...this.webSeries,this.title.value,this.director.value];
    this.title.value = "";
    this.director.value = "";
  }
}

