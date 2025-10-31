import type { KanbanBoardType } from "./App";
import { Coluna } from "./Coluna";

type KanbanBoardProps = {
    quadro: KanbanBoardType;
}

export default function KanbanBoard({quadro}:KanbanBoardProps){
    return (
       <div className="kanban-board">
            <h1>{quadro.projeto}</h1>
            <ul className="colunas">
                {quadro.colunas.map((coluna)=>
                    <Coluna key = {coluna.titulo} coluna = {coluna} />
                )}
            </ul>
       </div> 
    );
}