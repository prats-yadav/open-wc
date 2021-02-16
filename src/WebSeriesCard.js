import {LitElement,html,css} from 'lit-element';
import {webSeriesData} from './WebSeriesList';

export class WebSeriesCard extends LitElement{

static get properties(){
    return {
        webSeriesData:{type: Array}
    }
}
static get styles() {
return css`  
.web-series-overview {
    display: grid;
    float:left;
    grid-template-columns: auto auto auto;
    background-color: #e9f0f5;
    padding: 10px;
    border: 1px solid red;
    height: 88vh;
    width: 125%;
    margin: auto;
}
.web-card {
    box-shadow: 0 4px 8px 0 rgba(138, 3, 3, 0.2);
    margin: 12px;
    text-align: center;
    font-family: arial;
    min-width: 40%;
    max-height: 30vh;
    background-color: lightskyblue;
    padding: 12px;
    }
    @media screen and (max-width: 1000px) {
    .web-series-overview {
        display: flex;
        flex-direction: column;
        padding: 1px;
        border: 1px solid red;
        height: auto;
        width: 40%;
        margin: 1px;

    }
    .web-card {
        float: left;
        text-align: center;
    }
    
`;
}

constructor(){
    super();
    this.webSeriesData = webSeriesData; 
    window.addEventListener('card-details',this.addDetails.bind(this)) 
}


disconnectedCallback(){
    window.removeEventListener('card-details',this.addDetails.bind(this))
}
addDetails(e){
    this.webSeriesData = this.webSeriesData.concat(e.detail.webSeriesData);
    console.log('e:',e.detail.webSeriesData);
}

render() {
    return html`
    <div class="web-series-overview">
        ${this.webSeriesData.map(
            data =>html`
            <div class="web-card">
            <h3>${data.title}</h3>
            <p>${data.director}</p>
            <p>${data.star}</p>
            <p>${data.platform}</p>
            </div>	
            `
          )}
    </div>
    `;
  }
};
