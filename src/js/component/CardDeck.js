import React from "react";
import PropType from "prop-types";

// Component - Card modelo
export const CardDeck = props => {
	return (
		<div className="card">
			<img
				src={props.imageUrl}
				className="card-img-top"
				alt="500 x 325"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardText}</p>
			</div>
			<div>
				<a href={props.buttonUrl} className="btn btn-primary">
					{"Find out More!"}
				</a>
			</div>
		</div>
	);
};

// Declaramos los Prop Types para las Cards del CardDeck
CardDeck.propTypes = {
	imageUrl: PropType.string,
	cardTitle: PropType.string,
	cardText: PropType.string,
	buttonUrl: PropType.string
};
