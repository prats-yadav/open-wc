import { LitElement, html, css } from 'lit-element';
import { cardLayout } from './card-layout.js';


export class WebApp extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      title:{ type : String},
      director: { type : String},
      star: { type : String},
      platform: { type : String},
      add: { type : String}
    };
  }

  static get styles() {
    return css`
      :form {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--web-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

    .heading {
    border: 1px solid red;
    padding: 2px;
    text-align: center;
    }

.web-series-form {
    width: 35%;
    float: left;
    padding: 2px;
    border: 1px solid red;
    height: 90vh;
}

.title {
    color: grey;
    font-size: 12px;
}

.button {
    border: none;
    outline: 0;
    /* display: inline-block; */
    padding: 2px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 2%;
    font-size: 8px;
    height: 1vh;

}

.a {
    text-decoration: none;
    font-size: 15px;
    color: black;
}

.label {
    font-size: 10px;
    color: black;
    float: left;
    margin: auto;

}

.web-series-form-input {
    /* display: inline-block; */
    float: none;
    padding: 5px;
}

.button:hover,
.a:hover {
    opacity: 0.7;
}

.web-series-card-layout{
  margin:1px;

}


@media screen and (max-width: 1000px) {
    .web-series-form {
        width: 35%;
        float: none;
        padding: 2px;
        border: 1px solid red;
        height: auto;
        flex-grow:0;
    }
    .web-series-card-layout{
        margin:1px;
        width: 35%;
        height:auto;
        flex-grow: 1;
    }
    main {
        flex-grow: 1;
    }
  }
  `;
  }

  constructor() {
    super();
    this.heading = 'Web Series';
    this.title = 'Title';
    this.director = 'Director Name';
    this.star = 'Star Name';
    this.platform = 'Streaming On';
    this.add = 'ADD';
  }

  render() {
    return html`
      <main>
      <h1>${this.heading}</h1>
      <div class="web-series-form">
            <form id="input-form" action="/action">
                <div class="web-series-form-input">
                    <label for="title">${this.title}: </label>
                    <input type="text" id="title" name="title" placeholder="title"></input>
                </div>
    
                <div class="web-series-form-input">
                    <label for="dirname">${this.director} : </label>
                    <input type="text" id="dirname" name="dirname" placeholder="director"></input>
                </div>
    
                <div class="web-series-form-input">
                    <label for="starname">${this.star}  : </label>
                    <input type="text" id="starname" name="starname" placeholder="star"></input>
                </div>
    
                <div class="web-series-form-input">
                    <label for="streaming">${this.platform} : </label>
                    <select id="streaming" name="streaming">
                      <option value="prime">Amazon Prime</option>
                      <option value="netflix">Netflix</option>
                      <option value="sonyliv">Sony Liv</option>
                    </select>
                </div>
    
                <div class="web-series-form-input">
                    <button onclick=submit() value="Submit form">${this.add}</button>
                </div>
    
            </form>
        </div>
        
        <div class="web-series-card-layout">${cardLayout}
        </div>
      </main>
      <p class="app-footer">
      </p>
    `;
  }
}
