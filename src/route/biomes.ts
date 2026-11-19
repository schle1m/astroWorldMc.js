import { request } from "../helpers/req";
import type { BiomesResponse, BiomesResponseSingle} from "../typings/biomes";
interface BiomeOptions {
    biome?: string;
    dimension?: string;
    rarity?: string;
}
export async function getBiome(options: BiomeOptions = {}): Promise<BiomesResponse | BiomesResponseSingle> {
    const { biome, ...filters } = options;
    const url = biome ? `/biomes/${biome}` : `/biomes`
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== "") {
            params.set(key, value);
        }
    }
    const q= params.toString()
    return biome ? request<BiomesResponseSingle>(`${url}?${q}`) : request<BiomesResponse>(`${url}?${q}`);
}