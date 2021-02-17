import { LitElement, html, css } from 'lit-element';
// import {WebCard} from './WebCard';

// customElements.define('web-card', WebCard);
export class WebSeriesForm extends LitElement{

constructor(){
    super();
    this.webSeriesData =[];
}

static get properties(){
    return{
        webSeriesData:{type : Array},
    }

}

static get style(){
        return css`

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
    .text-box {
      width:70%;
    }
}
`;

}

_getTitle() {
    return this.shadowRoot.getElementById('title').value;
   
 }
 
 _getDirector(){
   return this.shadowRoot.getElementById('director').value;
 }
 
 _getStar() {
   return this.shadowRoot.getElementById('star').value;
 }
 
 _getPlatform(){
   return this.shadowRoot.getElementById('platform').value;
 
 }

render() {
    return html`
    <div>
    <div class="web-series-form">
              <div class="web-series-form-input">
                  <label for="title">Title: </label>
                  <input type="text" class="text-box" id="title" name="titlename" onfocus="this.value=''"></input>
              </div>
  
              <div class="web-series-form-input">
                  <label for="dirname">Director : </label>
                  <input type="text" class="text-box" id="director" name="directorname" onfocus="this.value=''"></input>          
              </div>
  
              <div class="web-series-form-input">
                  <label for="starname">Star : </label>
                  <input type="text" class="text-box" id="star" name="starname" onfocus="this.value=''"></input>
              </div>
  
              <div class="web-series-form-input">
                  <label for="streaming">StreamingOn : </label>
                  <select class="text-box" id="platform" name="platformname" onfocus="this.value=''">
                    <option value="prime">Amazon Prime</option>
                    <option value="netflix">Netflix</option>
                    <option value="sonyliv">Sony Liv</option>
                  </select>
              </div>
  
              <div class="web-series-form-input">
              <button @click=${this.addCardDetails} alt="addButton">Add</button>
              </div>
        </div>
    </div>
    
    `;
}

addCardDetails(){

    const val1 = this._getTitle();
    const val2 = this._getDirector();
    const val3 = this._getStar();
    const val4 = this._getPlatform();
    console.log('value 1:',val1);
    
  if(val1!="" && val2!="" && val3!="" & val4!=""){  
    this.webSeriesData = [...this.webSeriesData,{title:val1,director:val2,star:val3,platform:val4}];
    // console.log(this.webSeriesData);
    this.dispatchEvent(new CustomEvent('card-details',{
        bubbles: true,
        cancelable: false,
        composed:true,
        detail:{
            webSeriesData:this.webSeriesData        
        }
    }))
    this.webSeriesData=[];
  }
  if(val1=="" || val2=="" || val3=="" || val4==""){
    alert("Please enter all input fields");
  }
}   

}
