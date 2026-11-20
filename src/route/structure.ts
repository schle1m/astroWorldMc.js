import { request } from "../helpers/req";
import type { StructuresResponse, StructuresResponseSingle } from "../typings/structure";

interface strucOpts {
    slug?: string,
    rarity?: string,
    dimension?: string,
    category?: string
}

export async function getStructure(options: strucOpts = {}): Promise <StructuresResponse | StructuresResponseSingle> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 1) {
        return request<StructuresResponseSingle>(`/structures/${encodeURIComponent(slug)}`)
    } else {
        const params = new URLSearchParams()
        for (const [key, value] of Object.entries(filters)) {
            if (value !== undefined && value !== "") {
                params.set(key, value);
            }
        }
        return request(`/structures?${params.toString()}`)
    }
}