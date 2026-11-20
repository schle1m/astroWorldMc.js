import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { StructuresResponse, StructuresResponseSingle } from "../typings/structure";

interface strucOpts {
    slug?: string,
    search?: string
    rarity?: string,
    dimension?: string,
    category?: string
}

export async function getStructure(options: strucOpts = {}): Promise <StructuresResponse | StructuresResponseSingle> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 1) {
        return request<StructuresResponseSingle>(`/structures/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request(`/structures?${params}`)
    }
}