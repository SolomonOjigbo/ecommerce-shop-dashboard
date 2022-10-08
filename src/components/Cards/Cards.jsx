import React from "react";
import { cardsData } from "../../Data/Data";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";

const Cards = () => {
	return (
		<div className="Cards">
			{cardsData.map((card, id) => {
				return (
					<div className="parentContainer" key={id}>
						<CardItem
							title={card.title}
							color={card.color}
							barValue={card.barValue}
							value={card.value}
							series={card.series}
							png={card.png}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
