export interface Mob {
    name: string;
    id: string;
    type: string;
    hp: number;
    damage: {
        easy: number
        normal: number;
        hard: number;
    };
    xpDrop: {
        min: number;
        max: number;
    };
    spawnBiomes: string[];
    spawnConditions: string;
    drops: {
        item: string;
        count: {
            min: number;
            max: number;
        };
        chance: number;
    }[];
    behavior: string;
    weaknesses: string[];
    tameable: boolean;
    tamingMethod: string | null;
    breedable: boolean;
    breedingItem: string | null;
    versionAdded: string;
    category: string;
    notes: string;
}
export interface MobsResponse {
    success: boolean;
    count: number;
    data: Mob[];
}
export interface MobSingleResponse {
    success: boolean;
    data: Mob;
}