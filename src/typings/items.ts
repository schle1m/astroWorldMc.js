export interface Item {
    name: string;
    id: string;
    category: string;
    stackSize: number;
    durability: number | null;
    description: string;
    obtainedBy: string[];
    craftingRecipe: {
        pattern: (string | null)[][];
        ingredients: Record<string, string>;
        output: {
            item: string;
            count: number;
        };
        station: string;
    } | null;
    enchantable: boolean;
    applicableEnchantments: string[];
    foodValue: number | null;
    fuelValue: number | null;
    versionAdded: string;
    notes: string;
}
export interface ItemResponse {
    success: boolean;
    count: number,
    data: Item;
}
export interface ItemSingleResponse {
    success: boolean;
    data: Item;
}