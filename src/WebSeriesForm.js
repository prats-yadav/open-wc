const template = document.createElement('template');
template.innerHTML=`
<style>
.web-series-form {
  width: 35%;
  float: left;
  padding: 2px;
  border: 1px solid red;
  height: 90vh;
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
.button:hover,
.a:hover {
    opacity: 0.7;
}
@media screen and (max-width: 1000px) {
  .web-series-form {
      width: 35%;
      float: left;
      padding: 2px;
      border: 1px solid red;
      height: auto;
  }
}

</style>
<div>
      <div class="web-series-form">
            <form id="input-form" action="/action">
                <div class="web-series-form-input">
                    <label for="title">Title: </label>
                    <input type="text" id="title" name="title" placeholder="title"></input>
                </div>
    
                <div class="web-series-form-input">
                    <label for="dirname">Director: </label>
                    <input type="text" id="dirname" name="dirname" placeholder="director"></input>
                </div>
    
                <div class="web-series-form-input">
                    <label for="starname">Star Name: </label>
                    <input type="text" id="starname" name="starname" placeholder="star"></input>
                </div>
    
                <div class="web-series-form-input">
                    <label for="streaming">StreamingOn : </label>
                    <select id="streaming" name="streaming">
                      <option value="prime">Amazon Prime</option>
                      <option value="netflix">Netflix</option>
                      <option value="sonyliv">Sony Liv</option>
                    </select>
                </div>
    
                <div class="web-series-form-input">
                    <button onclick=submit() value="Submit form">ADD</button>
                </div>
            </form>
        </div>
</div>
`;

class WebSeriesForm extends HTMLElement{
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
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.heading = 'Web Series';
    this.title = 'Title';
    this.director = 'Director Name';
    this.star = 'Star Name';
    this.platform = 'Streaming On';
    this.add = 'ADD';
  }

}

window.customElements.define('web-series-form', WebSeriesForm);
