import type { ColunaType } from "./App";
import { Card } from "./Card";
import "./Coluna.css"

type ColunaProps = {
    coluna: ColunaType;
}

export function Coluna({coluna}:ColunaProps){
    return (<li className="coluna">
        <h2>{coluna.titulo}</h2>
        <h2>{coluna.wip !==null?`WIP:${coluna.wip}`:"-"}</h2>
        <ol className="cards">
            {coluna.cards.map((card) => <Card key={card.id}
            card={card} />)}
        </ol>
    </li>)
}