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

const cardSuits: CardSuit[] = [
    CardSuit.Clubs,
    CardSuit.Spades,
    CardSuit.Hearts,
    CardSuit.Diamonds,
];


const compute = (ranks: string[], index: number) => {
    // if (index < 0 || index >= ranks.length) {
    //     throw new Error('Index out of bounds');
    // }
    const position = index % ranks.length;
    return ranks[position] as CardSuit;
};

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

export default function CardList({ amountOfCards }: { amountOfCards: number }) {
    const generateCards = (amountOfCards: number): Card[] => {
        const cards: Card[] = [];

        if (amountOfCards < 0 || amountOfCards > cardRanks.length * cardSuits.length) {
            throw new Error('Index out of bounds');
        }

        for (let i = 0; i < amountOfCards; i++) {
            cards.push({
                suit: compute(cardSuits, i),
                rank: compute(cardRanks, i),
            });
        }

        return cards;
    };

    const cards = generateCards(amountOfCards);
    console.log(cards);

    return (
        <div>
            <h1>Deck of Cards</h1>
            <ul>
                {cards.map((card, index) => (
                    <li key={index}>
                        {card.rank} {card.suit}
                    </li>
                ))}
            </ul>
        </div>
    );
}
