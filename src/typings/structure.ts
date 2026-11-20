export interface Structure {
    name: string;
    id: string;
    dimension: string;
    biomes: string[];
    rarity: string;
    yLevel: {
        min: number;
        max: number;
    };
    features: string[];
    hostileMobs: string[];
    loot: {
        item: string;
        chance: number;
        count: {
            min: number;
            max: number;
        };
    }[];
    uniqueLoot: string[];
    howToFind: string;
    dangers: string[];
    rewards: string[];
    versionAdded: string;
    category: string;
    notes: string;
}
export interface StructuresResponse {
    success: boolean;
    count: number;
    data: Structure[];
}
export interface StructuresResponseSingle {
    success: boolean;
    data: Structure[];
}