import {LitElement,html,css} from 'lit-element';
import {webSeriesData} from './WebSeriesList';

export class WebSeriesCard extends LitElement{
constructor(){
        super();
        this.webSeriesData = webSeriesData;   
}
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
            .button {
        border: none;
        outline: 0;
        /* display: inline-block; */
        padding: 2px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 1%;
        font-size: 8px;
        height: 1vh;

        }
        .button:hover,
        .a:hover {
        opacity: 0.7;
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

render() {
    return html`
    <div class="web-series-overview">
        ${this.webSeriesData.map(
            data=>html`
            <div class="web-card">
            <h3>${data.title}</h3>
            <p>${data.director}</p>
            <p>${data.star}</p>
            <p>${data.platform}</p>
            <button @click=${this.deleteCard} title="${data.title}" alt="deleteButton">Delete</button>
            </div>
            `
          )}
    </div>
    `;
  }

  deleteCard(e){
    console.log("clicked on delete button");
    const title=e.target.title;
    this.webSeriesData=this.webSeriesData.filter(data=>data.title !== title);
    console.log(this.webSeriesData);
    this.dispatchEvent(new CustomEvent('card-delete',{
        bubbles: true,
        cancelable: false,
        composed:true,
        detail:{
            webSeriesData:this.webSeriesData        
        }
    }))
    this.webSeriesData=[];
  }
};
