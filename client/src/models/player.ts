import { Class } from "./enum";
import { Layer } from "./map";

export interface IPosition{
    x:number,
    y:number,
}

export interface PlayerProps{
    layers:Layer[],
    playerInfo:IPlayer,   
}

export interface IStats{
    attack:number,
    healthPoints:number,
    defense:number,
}

export interface IPlayer{
    name:string,
    class:Class,
    icon:string,
    stats:IStats,
}