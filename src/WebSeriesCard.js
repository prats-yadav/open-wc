import {LitElement,html,css} from 'lit-element';
// import {WebCard} from './WebCard';
// import { repeat } from "lit-html/directives/repeat";

// customElements.define('web-card', WebCard);
export class WebSeriesCard extends LitElement{


static get properties(){
    return {
        seriesData:{type: Array}
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
    width: 62%;
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
    this.seriesData =[
        {title:"Breaking Bad",director:"Vince Gilligan",star:"Bryan Cranston",platform:"Netflix"},
        {title:"Game of Thrones",director:"David Benioff",star:"Emilia Clarke",platform:"Netflix"},
        {title:"Mirzapur",director:"Puneet Krishna",star:"Pankaj Tripathi",platform:"AmazonPrime"},
        {title:"The Boys",director:"Eric Kripke",star:"Karl Urban",platform:"AmazonPrime"},
        {title:"Daredevil",director:"Drew Goddard",star:"Charlie Cox",platform:"Netflix"},
        {title:"The Walking Dead",director:"Frank Darabont",star:"Andrew Lincoln",platform:"AMC"}

    ]
}


render() {
    return html`
    <div class="web-series-overview">
        ${this.seriesData.map(
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
