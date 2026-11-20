import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { BiomesResponse, BiomesResponseSingle} from "../typings/biomes";
interface BiomeOptions {
    slug?: string;
    search?: string
    dimension?: string;
    category?: string
    rarity?: string;
}
export async function getBiome(options: BiomeOptions = {}): Promise<BiomesResponse | BiomesResponseSingle> {
    const { slug, ...filters } = options;
    if (slug && slug.length > 0) {
        return request<BiomesResponseSingle>(`/biomes/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<BiomesResponse>(`/biomes?${params}`)
    }
}