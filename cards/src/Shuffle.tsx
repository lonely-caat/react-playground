import React from "react";

interface CardProps {
    onClick: () => void;
}


export default function Shuffle({onClick}:CardProps) {
    return (
        <div>
            <button className="shuffle-button" onClick={onClick}>Shuffle the deck!</button>
        </div>
    );
}
