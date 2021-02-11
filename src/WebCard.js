import {LitElement,html,css} from 'lit-element';

export class WebCard extends LitElement{

    static get properties(){
        return{
            webSeriesData:Object,
        };
    }

    static get styles() {
    return css`
    .web-series-card {
    box-shadow: 0 4px 8px 0 rgba(138, 3, 3, 0.2);
    margin: 12px;
    text-align: center;
    font-family: arial;
    min-width: 40%;
    max-height: 30vh;
    background-color: lightskyblue;
    padding: 12px;
    }
`;
}

    constructor(){
        super();
        
    }

    render(){
        return html`
        <div class="web-series-card">
        <h3>${this.webSeriesData.title}</h3>
        <p>${this.webSeriesData.director}</p>
        <p>${this.webSeriesData.star}</p>
        <p>${this.webSeriesData.platform}</p>	
        </div>
        
        `
    };
}

