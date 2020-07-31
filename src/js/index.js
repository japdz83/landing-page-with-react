//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
import { Cards } from "./component/Cards";

// Renderizado de los componentes para Landing Page
ReactDOM.render(
	<div className="container">
		<div className="card-deck">
			<Cards />
		</div>
	</div>,
	document.querySelector("#app")
);

// Dentro del ReactDOM.render colocar:
//  <NavBar /> ----- debajo del <div container>
//  <Jumbotron /> ---- debajo de <NavBar/>
//  <Footer/> ------ antes del <div>, que cierra el container
