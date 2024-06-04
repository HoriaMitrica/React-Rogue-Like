import { useState, useEffect } from 'react'
import { IPosition, PlayerProps } from '../../models/player'
import { TILE_SIZE } from '../../constants/constants';
export const Player: React.FC<PlayerProps> = ({ layers }) => {

  const [position, setPosition] = useState<IPosition>({ x: 1, y: 1 });

  useEffect(() => {

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  const handleKeyPress = (e: KeyboardEvent) => {
    let newX = position.x;
    let newY = position.y;

    if (e.key === 'w') {
      newY -= 1;
      if (position.y * TILE_SIZE < window.innerHeight) {
        window.scrollBy(0, -TILE_SIZE * 4);
      }
    }
    if (e.key === 's') {
      newY += 1;
      if (position.y * TILE_SIZE > window.innerHeight * 2 / 3) {
        window.scrollBy(0, TILE_SIZE * 4);
      }
    }
    if (e.key === 'a') {
      newX -= 1;
      if (position.x * TILE_SIZE <window.innerWidth) {
        window.scrollBy(-TILE_SIZE * 4, 0);
      }
    }
    if (e.key === 'd') {
      newX += 1;
      if (position.x * TILE_SIZE > window.innerWidth* 2 / 3) {
        window.scrollBy(TILE_SIZE * 4, 0);  
      }
    }

    if (!checkCollision(newX, newY)) {
      setPosition({ x: newX, y: newY });
    }
  };

  const checkCollision = (x: number, y: number): boolean => {
    for (const layer of layers) {
      if (layer.collider) {
        for (const tile of layer.tiles) {
          if (tile.x === x && tile.y === y) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <>
      <div
        key={0}
        style={{
          position: 'absolute',
          left: position.x * TILE_SIZE,
          top: position.y * TILE_SIZE,
          width: TILE_SIZE,
          height: TILE_SIZE,
          backgroundImage: `url(/src/assets/sprites/rogues.png)`,
          backgroundPosition: `-${32}px -${32}px`
        }}
      />
    </>
  )
}
