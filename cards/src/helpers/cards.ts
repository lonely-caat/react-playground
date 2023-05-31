import {cardRanks, CardSuit} from "../constants/cards";
import {Card} from "../App";
import { useState } from "react";

export const useCardActions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % result.length);
    };

    const shuffle = <T>(array: T[]): T[] => {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const deal = <T>(array: T[], amount:number): T[] => {
        return array.splice(0, amount);
    }

    return {
        currentIndex,
        deal,
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
