import React from "react";
import {Hand} from "./Hand";
import Shuffle from "./Shuffle";
import { CardSuit } from "./constants/cards";
import { useCardActions } from "./helpers/cards";
import {result} from "./helpers/cards";
import CardBase from "./Card";


export interface Card {
    suit: CardSuit;
    rank: string;
}

export default function CardList() {
    const { nextCard, shuffle, deal } = useCardActions();

    const deck = shuffle(result)
    const ai_hand = deal(deck, 6)
    const player = deal(deck, 6)

    function renderCard(card: Card) {
        return <CardBase currentCard={card}/>
    }

    console.log(deck.length+'!!!!!!!!!!!!!!!')

    return (
        <div>
            <div className="card-container">
                <h1>Deck of Cards</h1>
                <div className="ai-cards-container">
                    {ai_hand.map(renderCard)}
                </div>

                <div className="player-cards-container">
                    {player.map(renderCard)}
                </div>


            </div>
        </div>
    );
}
