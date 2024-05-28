import React, { useEffect, useState } from 'react';
import { MapData, Tile, Layer } from '../../models/map'
import { MapPaths } from '../../models/enum';

export
  const TileMap: React.FC = () => {
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

    const { tileSize, layers } = mapData;

    const getTilePosition = (tileId: string) => {
      const id = parseInt(tileId);
      const cols = Math.floor(256 / tileSize);
      const x = (id % cols) * tileSize;
      const y = Math.floor(id / cols) * tileSize;
      return { x, y };
    };

    return (
      <div style={{ position: 'relative', width: mapData.mapWidth * tileSize, height: mapData.mapHeight * tileSize }}>
        {layers.map((layer: Layer, layerIndex: number) => (
          <div key={layerIndex} style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%' }}>
            {layer.tiles.map((tile: Tile, tileId: number) => {
              const { x, y } = getTilePosition(tile.id);

              return (
                <div
                  key={tileId}
                  style={{
                    position: 'absolute',
                    left: tile.x * tileSize,
                    top: tile.y * tileSize,
                    width: tileSize,
                    height: tileSize,
                    backgroundImage: `url(/src/assets/json/spritesheet.png)`,
                    backgroundPosition: `-${x}px -${y}px`
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };