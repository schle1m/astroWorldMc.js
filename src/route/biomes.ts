import { request } from "../helpers/req";
import type { BiomesResponse, BiomesResponseSingle} from "../typings/biomes";
interface BiomeOptions {
    slug?: string;
    dimension?: string;
    rarity?: string;
}
export async function getBiome(options: BiomeOptions = {}): Promise<BiomesResponse | BiomesResponseSingle> {
    const { slug, ...filters } = options;
    const url = slug ? `/biomes/${slug}` : `/biomes`
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== "") {
            params.set(key, value);
        }
    }
    const q= params.toString()
    return slug ? request<BiomesResponseSingle>(`${url}?${q}`) : request<BiomesResponse>(`${url}?${q}`);
}