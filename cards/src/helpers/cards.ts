import {cardRanks, CardSuit} from "../constants/cards";
import {Card} from "../App";
import { useState } from "react";

export const useCardActions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % result.length);
    };

    const shuffle = () => {
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        nextCard();
    };

    return {
        currentIndex,
        currentCard: result[currentIndex],
        nextCard,
        shuffle,
    };
};

const cardSuits: CardSuit[] = [
    CardSuit.Clubs,
    CardSuit.Spades,
    CardSuit.Hearts,
    CardSuit.Diamonds,
];

export const compute = (index: number): Card => {
    return {
        suit: cardSuits[Math.floor(index / cardRanks.length)],
        rank: cardRanks[index % cardRanks.length],
    };
};

export const result = new Array(52).fill(0).map((_, index) => {
    return compute(index);
});
