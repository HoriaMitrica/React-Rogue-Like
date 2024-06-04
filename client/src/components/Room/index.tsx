
import { TILE_SIZE } from '../../constants/constants';
import { Layer, Tile } from '../../models/map';
import { RoomProps } from '../../models/room';

export const Room: React.FC<RoomProps> = ({mapData}) => {

  const getTilePosition = (tileId: string) => {
    const id = parseInt(tileId);
    const cols = Math.floor(256 / TILE_SIZE);
    const x = (id % cols) * TILE_SIZE;
    const y = Math.floor(id / cols) * TILE_SIZE;
    return { x, y };
  };

  return (
    <div style={{ position: 'relative', width: mapData.mapWidth * TILE_SIZE, height: mapData.mapHeight * TILE_SIZE }}>
      {mapData.layers.map((layer: Layer, layerIndex: number) => (
        <div key={layerIndex} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {layer.tiles.map((tile: Tile, tileId: number) => {
            const { x, y } = getTilePosition(tile.id);

            return (
              <div
                key={tileId}
                style={{
                  position: 'absolute',
                  left: tile.x * TILE_SIZE,
                  top: tile.y * TILE_SIZE,
                  width: TILE_SIZE,
                  height: TILE_SIZE,
                  backgroundImage: `url(${mapData.spriteSheetPath})`,
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