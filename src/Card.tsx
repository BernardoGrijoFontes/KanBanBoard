import type { CardType } from "./App";

type CardProps = {
    card: CardType;
}

export function Card({card}:CardProps){
    return (<div className="card">
        <p>{card.texto}</p>
        <progress max={100} value={card.progresso}>
            {card.progresso}%
        </progress>
    </div>)
}