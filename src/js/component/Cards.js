import React from "react";
import { CardDeck } from "./CardDeck";

// Funcion para generar las Cards a partir de un arreglo
export function Cards(props) {
	//Arreglo de objetos Cards
	let fourCards = [
		{
			imageUrl: "https://via.placeholder.com/500x325",
			cardTitle: "Card Title 1",
			cardText:
				"Lorem ipsum dolor sit amet consectetur adipiscing, elit aptent sem conubia ridiculus.",
			buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan"
		},
		{
			imageUrl: "https://via.placeholder.com/500x325",
			cardTitle: "Card Title 2",
			cardText:
				"Lorem ipsum dolor sit amet consectetur adipiscing, elit nam imperdiet habitasse massa, potenti ullamcorper feugiat nullam suscipit.",
			buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney"
		},
		{
			imageUrl: "https://via.placeholder.com/500x325",
			cardTitle: "Card Title 3",
			cardText:
				"Lorem ipsum dolor sit amet consectetur adipiscing, elit aptent sem conubia ridiculus.",
			buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan"
		},
		{
			imageUrl: "https://via.placeholder.com/500x325",
			cardTitle: "Card Title 4",
			cardText:
				"Lorem ipsum dolor sit amet consectetur adipiscing, elit nam imperdiet habitasse massa, potenti ullamcorper feugiat nullam suscipit.",
			buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney"
		}
	];
	// Funcion map para recorrer el arreglo y generar las Cards
	return fourCards.map((card, index) => {
		return (
			<CardDeck
				key={index}
				imageUrl={card.imageUrl}
				cardTitle={card.cardTitle}
				cardText={card.cardText}
				buttonUrl={card.button}
			/>
		);
	});
}
