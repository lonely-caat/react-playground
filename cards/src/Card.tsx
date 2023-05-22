import React from "react";
import {Card as CardInterface} from "./App";

interface CardProps {
    onClick: () => void;
    currentCard: CardInterface;
}

export default function Card({onClick, currentCard }:CardProps) {
    return (
            <div className="card" onClick={onClick}>
                <div className="upper-right">
                    <div>{currentCard.rank}</div>
                    <div>{currentCard.suit}</div>
                </div>
                <div className="large-text">{currentCard.suit}</div>
                <div className="lower-left">
                    <div>{currentCard.rank}</div>
                    <div>{currentCard.suit}</div>
                </div>
        </div>
    );
}
