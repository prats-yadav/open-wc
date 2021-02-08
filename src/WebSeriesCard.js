const newtemplate = document.createElement('template');
newtemplate.innerHTML=`
<style>

.web-series-overview{
    display: grid;
    grid-template-columns: auto auto auto;
    /* grid-gap: 10px; */
    background-color: #e9f0f5;
    /* float: center; */
    padding: 10px;
    border: 1px solid red;
    height: 88vh;
    width: 62%;
    margin: auto;
}

.web-series-card {
    box-shadow: 0 4px 8px 0 rgba(138, 3, 3, 0.2);
    padding: 20px;
    margin: auto;
    text-align: center;
    font-family: arial;
    min-width: 40%;
    max-height: 30vh;
    background-color: lightskyblue;
    margin: auto;
    padding: 12px;
}

</style>
<div class="web-series-overview">
		<div class="web-series-card">
		  <h3>Breaking Bad</h3>
			<p class="title"> Vince Gilligan </p>
			<p> Bryan Cranston</p>
			<p> Netflix</p>
		</div>
		<div class="web-series-card">
			<h3>Game of Thrones</h3>
			<p class="title">David Benioff</p>
			<p>Emilia Clarke</p>
			<p>Netflix</p>		
		</div>
		<div class="web-series-card">
			<h3 >Mirzapur</h3>
			<p class="title">Puneet Krishna</p>
			<p>Pankaj Tripathi</p>
			<p>AmazonPrime</p>
		</div>
		<div class="web-series-card">
			<h3>The Boys</h3>
			<p class="title"> Eric Kripke </p>
			<p> Karl Urban </p>
			<p>AmazonPrime</p>
		</div>
		<div class="web-series-card">
			<h3>Daredevil</h3>
			<p class="title">Drew Goddard</p>
			<p>Charlie Cox</p>
			<p>Netflix</p>
		</div>
		<div class="web-series-card">
			<h3>The Walking Dead</h3>
			<p class="title">Frank Darabont</p>
			<p>Andrew Lincoln</p>
			<p>AMC</p>
		</div>
    </div>
    
`;

class WebSeriesCard extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(newtemplate.content.cloneNode(true));
    }

}
window.customElements.define('web-series-card', WebSeriesCard);