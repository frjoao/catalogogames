import { Game } from './game.model';

export interface gamesAdicionados{
    userId:number;
    gamesAdicionados:  Array<Game> | number[];
    id:number;
}