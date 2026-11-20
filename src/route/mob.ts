import { request } from "../helpers/req"
import type { MobsResponse, MobSingleResponse } from "../typings/mob"

interface mobOpts {
    slug?: string;
    type?: string;
}

export async function getMob(options: mobOpts = {}): Promise<MobsResponse | MobSingleResponse> {
    const {slug, type} = options;
    if (slug) {
        return request<MobSingleResponse>(`/mobs/${encodeURIComponent(slug)}`)
    } else if (type) {
        return request<MobsResponse>(`/mobs?type=${encodeURIComponent(type)}`)
    } else {
        return request<MobsResponse>(`/mobs`)
    }
}