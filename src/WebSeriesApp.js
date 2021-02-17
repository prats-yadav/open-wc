import {WebSeriesCard} from './WebSeriesCard';
import {WebSeriesForm} from './WebSeriesForm';
import {LitElement,html,css} from 'lit-element';

customElements.define('web-series-form', WebSeriesForm);
customElements.define('web-series-card', WebSeriesCard);

export class WebSeriesApp extends LitElement{
     
    constructor(){
        super();
        this.webSeriesList =[
            {title:"Breaking Bad",director:"Vince Gilligan",star:"Bryan Cranston",platform:"Netflix"},
            {title:"Game of Thrones",director:"David Benioff",star:"Emilia Clarke",platform:"Netflix"},
            {title:"Mirzapur",director:"Puneet Krishna",star:"Pankaj Tripathi",platform:"AmazonPrime"},
            {title:"The Boys",director:"Eric Kripke",star:"Karl Urban",platform:"AmazonPrime"},
            {title:"Daredevil",director:"Drew Goddard",star:"Charlie Cox",platform:"Netflix"},
            {title:"The Walking Dead",director:"Frank Darabont",star:"Andrew Lincoln",platform:"AMC"}
            
            ];

        this.addEventListener('card-details',this.addDetails.bind(this))
        this.webSeriesData=[];
    }
    
    static get properties(){
        return{
            webSeriesData:{type : Array},
            webSeriesList:{type : Array},
        }
    
    }
    disconnectedCallback(){
        this.removeEventListener('card-details',this.addDetails.bind(this))
    }
    addDetails(e){
        this.webSeriesData = e.detail.webSeriesData;
        console.log('e1:',this.webSeriesData);
    }
    static get styles() {
        return css`  
        .web-series-app {
            display: flex;
            flex-direction: row;
            background-color: #e9f0f5;
            margin: auto;
            width:100%;
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
            .web-series-app {
                display: flex;
                flex-direction: column;
                padding: 1px;
                height: auto;
                margin: 1px;

            }
        }
        `;
    }

    render() {
        return html`
        <div class="web-series-app">
           <web-series-form>
           </web-series-form>
           <web-series-card>
           </web-series-card>
           <p>${this.webSeriesData.map(
            data=>html`
            <div class="web-card">
            <h3>${data.title}</h3>
            <p>${data.director}</p>
            <p>${data.star}</p>
            <p>${data.platform}</p>
            <button @click=${this.deleteCard} alt="deleteButton">Delete</button>
            </div>
            `
          )}</p>
        </div>
        `;
      }
}



