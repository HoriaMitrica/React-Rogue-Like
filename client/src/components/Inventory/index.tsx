import React from 'react'
import { InventoryProps, Item } from '../../models/inventory'
import { INVENTORY_STARTING_POSITION_X, INVENTORY_STARTING_POSITION_Z, SLOT_SIZE } from '../../constants/constants';

export const Inventory: React.FC<InventoryProps> = ({ slotsAmount,items }) => {

    const GenerateSlots = (amount: number): React.ReactNode[] => {
        let localSlots:React.ReactNode[]=[]
        for(let i=0;i<amount;i++)
            {
                localSlots.push( <div key={i} style={{
                    position: 'absolute',
                    left: INVENTORY_STARTING_POSITION_X+i * SLOT_SIZE,
                    top: INVENTORY_STARTING_POSITION_Z,
                    width: SLOT_SIZE,
                    height: SLOT_SIZE,
                    backgroundImage: `url(/src/assets/sprites/inventorySlot.png)`,
                  }}/> )
            }
        return localSlots;

    };
    
    const GenerateItems = (items:Item[]): React.ReactNode[] => {
        let localSlots:React.ReactNode[]=[]
        for(let i=0;i<items.length;i++)
            {
                localSlots.push( <div key={i} style={{
                    position: 'absolute',
                    left: INVENTORY_STARTING_POSITION_X+i * SLOT_SIZE,
                    top: INVENTORY_STARTING_POSITION_Z,
                    width: SLOT_SIZE,
                    height: SLOT_SIZE,
                    backgroundImage: items[i].icon,
                  }}/> )
            }
        return localSlots;

    };


    return (
        <>
            <div style={{zIndex:"10",}}>
                {GenerateSlots(slotsAmount)}
                {GenerateItems(items)}
            </div>
        </>
    )
}
