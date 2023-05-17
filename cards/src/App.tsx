import React from "react";

interface Card {
    suit: CardSuit;
    rank: string;
}

enum CardSuit {
    Spades = "spades",
    Clubs = "clubs",
    Hearts = "hearts",
    Diamonds = "diamonds",
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
    "jack",
    "queen",
    "king",
    "ace",
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
    return (
        <div>
            <h1>Deck of Cards</h1>
            {result.map((card, index) => (
                <div className="card" key={index} onClick={() => console.log(`./images/${card.rank}_of_${card.suit}`)}>
                    <img src={`./public/images/${card.rank}_of_${card.suit}.png`} alt={card.rank}/>

                </div>
            ))}
        </div>
    );
}
