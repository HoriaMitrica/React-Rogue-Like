import { Layer } from "./map";

export interface IPosition{
    x:number,
    y:number,
}

export interface PlayerProps{
    layers:Layer[]
}

export interface IStats{
    attack:number,
    healthPoints:number,
    defense:number,
   
}