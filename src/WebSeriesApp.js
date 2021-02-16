import {WebSeriesCard} from './WebSeriesCard';
import {WebSeriesForm} from './WebSeriesForm';
import {LitElement,html,css} from 'lit-element';
import {webSeriesData} from './WebSeriesList';

customElements.define('web-series-form', WebSeriesForm);
customElements.define('web-series-card', WebSeriesCard);


export class WebSeriesApp extends LitElement{

    constructor(){
        super();
        this.webSeriesData =[];
    }
    
    static get properties(){
        return{
            webSeriesData:{type : Array},
        }
    
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
           <web-series-form></web-series-form>
           <web-series-card></web-series-card>
        </div>
        `;
      }
}



