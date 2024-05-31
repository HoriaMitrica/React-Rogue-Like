import { useEffect, useState } from "react";
import { Player } from "../../components/Player"
import { Room } from "../../components/Room"
import { MapPaths } from "../../models/enum";
import { MapData } from "../../models/map";

export const Game=()=> {

  const [mapData, setMapData] = useState<MapData | null>(null);

  useEffect(() => {
    fetch(MapPaths.TestRoom)
      .then(response => response.json())
      .then((data: MapData) => setMapData(data))
      .catch(error => console.error('Error loading the map data:', error));
  }, []);
  
  if (!mapData) {
    return <div>Loading...</div>;
  }

    return (
      <>
      <Room mapData={mapData}/>
      <Player layers={mapData.layers}/>
      </>
    )
  }
  