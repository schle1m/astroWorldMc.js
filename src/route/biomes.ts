import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { BiomeOptions, BiomeSlugOptions,  BiomesResponse,BiomesResponseSingle} from "../typings/biomes";

export function getBiome(options: BiomeSlugOptions): Promise<BiomesResponseSingle>;
export function getBiome(options?: BiomeOptions & { slug?: undefined }): Promise<BiomesResponse>;
export function getBiome(options: BiomeOptions): Promise<BiomesResponse | BiomesResponseSingle>;

export async function getBiome(options: BiomeOptions = {}): Promise<BiomesResponse | BiomesResponseSingle> {
    const { slug, ...filters } = options;
    if (slug && slug.length > 0) {
        return request<BiomesResponseSingle>(`/biomes/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<BiomesResponse>(`/biomes?${params}`)
    }
}