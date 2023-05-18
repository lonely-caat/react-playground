import React, { useState } from "react";

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
    let [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = function() {
        while (currentIndex <=result.length) {
            setCurrentIndex(currentIndex + 1);
        }
        currentIndex = 0;
    };


    const currentCard = result[currentIndex];

    return (
        <div>
            <h1>Deck of Cards</h1>
            <div className="card" onClick={handleClick}>
                <img
                    src={require(`../public/images/${currentCard.rank}_of_${currentCard.suit}.png`)}
                    alt={currentCard.rank}
                />
            </div>
        </div>
    );
}
