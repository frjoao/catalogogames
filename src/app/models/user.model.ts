import { Game } from './game.model';

export interface User{
    id:number;
    name:string;
    email:string;
    password:string;
    meusJogos: Array<Game> | number[];
}