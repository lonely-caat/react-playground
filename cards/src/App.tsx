import React from "react";

enum CardSuit {
    Spades = "♠",
    Clubs = "♣",
    Hearts = "♥",
    Diamonds = "♦",
}

interface Card {
    suit: CardSuit;
    rank: string;
}

const cardSuits: CardSuit[] = [CardSuit.Spades, CardSuit.Clubs, CardSuit.Hearts, CardSuit.Diamonds];
const cardRanks: string[] = [
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
];

export default function Card(){
    const cardArray = cardSuits.map((suit) =>
        cardRanks.map((rank) => suit + rank)
    );

    return (
        <div>
            <h1>Deck of Cards</h1>
            {/*TODO: how do i make this an ordered list? with each element on a new line?*/}
            <p>{cardArray}</p>
        </div>
    );

}
