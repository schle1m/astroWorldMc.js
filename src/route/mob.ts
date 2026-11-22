import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { MobOptions, MobSlugOptions, MobsResponse,  MobSingleResponse } from "../typings/mob"

export function getMob(options: MobSlugOptions): Promise<MobSingleResponse>;
export function getMob(options?: MobOptions & { slug?: undefined }): Promise<MobsResponse>;
export function getMob(options: MobOptions): Promise<MobsResponse | MobSingleResponse>

export async function getMob(options: MobOptions = {}): Promise<MobsResponse | MobSingleResponse> {
    const {slug , ...filters} = options;
    if (slug) {
        return request<MobSingleResponse>(`/mobs/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<MobsResponse>(`/mobs?${params}`)
    }
}