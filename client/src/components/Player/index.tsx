import { useState,useEffect } from 'react'
import { IPosition } from '../../models/player'

export const Player = () => {

    const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 })

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'w':
                    setPosition(prev => ({ x: prev.x, y: prev.y - 1 }));
                    break;
                case 'a':
                    setPosition(prev => ({ x: prev.x - 1, y: prev.y }));
                    break;
                case 's':
                    setPosition(prev => ({ x: prev.x, y: prev.y + 1 }));
                    break;
                case 'd':
                    setPosition(prev => ({ x: prev.x + 1, y: prev.y }));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>

                <div
                    key={0}
                    style={{
                        position: 'relative',
                        left: position.x * 32,
                        top: position.y * 32,
                        width: 32,
                        height: 32,
                        backgroundColor: 'brown',
                    }}
                />
            </div>
        </>
    )
}
