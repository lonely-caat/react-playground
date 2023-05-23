import React from "react";
import Card from "./Card";
import Shuffle from "./Shuffle";
import { CardSuit } from "./constants/cards";
import { useCardActions } from "./helpers/cards";

export interface Card {
    suit: CardSuit;
    rank: string;
}

export default function CardList() {
    const { currentIndex, currentCard, nextCard, shuffle } = useCardActions();

    return (
        <div>
            <div className="card-container">
                <h1>Deck of Cards</h1>
                <Card onClick={nextCard} currentCard={currentCard}></Card>
                <Shuffle onClick={shuffle}></Shuffle>
            </div>
        </div>
    );
}
