import React from "react";

interface Card {
    suit: CardSuit;
    rank: string;
}

enum CardSuit {
    Spades = "♠",
    Clubs = "♣",
    Hearts = "♥",
    Diamonds = "♦",
}
const cardSuits: CardSuit[] = [CardSuit.Clubs, CardSuit.Spades, CardSuit.Hearts, CardSuit.Diamonds];
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

export default function Card() {
    const cardArray: Card[] = cardSuits.map((suit) =>
        cardRanks.map((rank) => ({ suit, rank }))
    ).flat();

    const cards = cardArray.map((card) => `${card.rank} ${card.suit}`);
    console.log(cards);

    return (
        <div>
            <h1>Deck of Cards</h1>
            {/*TODO: how do i make this an ordered list? with each element on a new line?*/}
            <p>{cards}</p>
        </div>
    );

}
