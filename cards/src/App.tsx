import React from "react";

interface Card {
    suit: string;
    rank: string;
}


const cardSuits: string[] = ["♠", "♣", "♥", "♦"];
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
    const cardArray = []
    for (const suit of cardSuits){for (const rank of cardRanks){
        const card: Card = {suit, rank};
        cardArray.push(card);
    }}

    const cards = cardArray.map((card) => `${card.rank} ${card.suit}`);
    console.log(cards)

    return (
        <div>
            <h1>Deck of Cards</h1>
            {/*TODO: how do i make this an ordered list? with each element on a new line?*/}
            <p>{cards}</p>
        </div>
    );

}
