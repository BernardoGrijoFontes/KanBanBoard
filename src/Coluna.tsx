import type { ColunaType } from "./App";

type ColunaProps = {
    coluna: ColunaType;
}

export function Coluna({coluna}:ColunaProps){
    return (<li className="coluna">
        <h2>{coluna.titulo}</h2>
        <h2>{coluna.wip !==null?`WIP:${coluna.wip}`:"-"}</h2>
        <ol className="cards"></ol>
    </li>)
}