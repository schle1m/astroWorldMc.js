export interface Biome {
    name: string;
    id: string;
    dimension: string;
    category: string;
    temperature: number;
    precipitation: string;
    terrainFeatures: string[];
    uniqueBlocks: string[];
    spawningMobs: string[];
    structuresFound: string[];
    colors: BiomeColors;
    versionAdded: string;
    rarity: string;
    notes: string;
}
export interface BiomeColors {
    grass: string;
    water: string;
    foliage: string;
    sky: string;
}
export interface BiomesResponse {
    success: boolean;
    count: number;
    data: Biome[];
}
export interface BiomesResponseSingle {
    success: boolean;
    data: Biome;
}