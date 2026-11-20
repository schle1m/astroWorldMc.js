import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { MobsResponse, MobSingleResponse } from "../typings/mob"

interface mobOpts {
    slug?: string;
    search?: string,
    type?: string;
    category?: string
}

export async function getMob(options: mobOpts = {}): Promise<MobsResponse | MobSingleResponse> {
    const {slug, ...filters} = options;
    if (slug) {
        return request<MobSingleResponse>(`/mobs/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request(`/mobs?${params}`)
    }
}