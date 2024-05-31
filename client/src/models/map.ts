export interface Tile {
    id: string;
    x: number;
    y: number;
  }
  
  export interface Layer {
    name: string;
    tiles: Tile[];
    collider: boolean;
  }
  
  export interface MapData {
    tileSize: number;
    mapWidth: number;
    mapHeight: number;
    layers: Layer[];
  }