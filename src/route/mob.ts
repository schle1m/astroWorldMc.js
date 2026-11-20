import { request } from "../helpers/req"
import type { MobsResponse, MobSingleResponse } from "../typings/mob"

interface mobOpts {
    id?: string;
    type?: string;
}

export async function getMob(options: mobOpts = {}): Promise<MobsResponse | MobSingleResponse> {
    const {id, type} = options;
    if (id) {
        return request<MobSingleResponse>(`/mobs/${id}`)
    } else if (type) {
        return request<MobsResponse>(`/mobs?type=${type}`)
    } else {
        return request<MobsResponse>(`/mobs`)
    }
}