import React, { useState } from "react";
import Card from "./Card";
import Shuffle from "./Shuffle";

export interface Card {
    suit: CardSuit;
    rank: string;
}

enum CardSuit {
    Spades = "♠️",
    Clubs = "♣️",
    Hearts = "♥️",
    Diamonds = "♦️",

}

const cardSuits: CardSuit[] = [
    CardSuit.Clubs,
    CardSuit.Spades,
    CardSuit.Hearts,
    CardSuit.Diamonds,
];

const cardRanks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
] as const;

const compute = (index: number): Card => {
    return {
        suit: cardSuits[Math.floor(index / cardRanks.length)],
        rank: cardRanks[index % cardRanks.length],
    };
};

const result = new Array(52).fill(0).map((_, index) => {
    return compute(index);
});

export default function CardList() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % result.length);
    };

    const shuffle = () => {
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        nextCard();
    };


    const currentCard = result[currentIndex];

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
