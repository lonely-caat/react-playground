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
    const generateCards = (numCards: number): Card[] => {
        const cards: Card[] = [];

        for (let i = 0; i < numCards; i++) {
            const randomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
            const randomRank = cardRanks[Math.floor(Math.random() * cardRanks.length)];
            const card = { suit: randomSuit, rank: randomRank };
            cards.push(card);
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
