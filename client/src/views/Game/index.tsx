import { useEffect, useState } from "react";
import { Player } from "../../components/Player"
import { Room } from "../../components/Room"
import { MapPaths } from "../../models/enum";
import { MapData } from "../../models/map";

import "./style.scss";

export const Game = () => {

  const [mapData, setMapData] = useState<MapData | null>(null);
  
  useEffect(() => {
    fetch(MapPaths.Room_002)
      .then(response => response.json())
      .then((data: MapData) => setMapData(data))
      .catch(error => console.error('Error loading the map data:', error));
  }, []);

  if (!mapData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={"hide-scrollbar"}>
        <Room mapData={mapData} />
        <Player layers={mapData.layers} />
        
      </div>
    </>
  )
}
