export interface InventoryProps {
    slotsAmount: number,
    items:Item[]
}

export interface Item{
    name:string,
    description:string,
    icon:string,
    isConsumable:boolean,
    isEquipable:boolean,
    
}