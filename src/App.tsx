import './App.css'
import json from "./data.json"
import KanbanBoard from './KanbanBoard';

const data = json as KanbanBoardType;

export type KanbanBoardType = {
  projeto: string;
  colunas: Array<ColunaType>;
}

export type ColunaType = {
  titulo: string;
  wip: number|null;
  cards: Array<CardType>;
}

export type CardType = {
  id: string;
  texto: string;
  progresso: number;
}

function App() {

  return (
    <KanbanBoard quadro={data}/>
  )
}

export default App
