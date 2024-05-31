import { useState,useEffect } from 'react'
import { IPosition, PlayerProps } from '../../models/player'
import { TILE_SIZE } from '../../constants/constants';
export const Player:React.FC<PlayerProps> = ({layers}) => {

    const [position, setPosition] = useState<IPosition>({ x: 1, y: 1 });
    console.log(position);
    useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, [position]);

    const handleKeyPress = (e: KeyboardEvent) => {
      let newX = position.x;
      let newY = position.y;
  
      if (e.key === 'w') newY -= 1;
      if (e.key === 's') newY += 1;
      if (e.key === 'a') newX -= 1;
      if (e.key === 'd') newX += 1;
  
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
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>

                <div
                    key={0}
                    style={{
                        position: 'relative',
                        left: position.x * TILE_SIZE,
                        top: position.y * TILE_SIZE,
                        width: TILE_SIZE,
                        height: TILE_SIZE,
                        backgroundColor: 'brown',
                    }}
                />
            </div>
        </>
    )
}
