import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { ItemResponse, ItemSingleResponse } from "../typings/items";

interface itemOptions {
    slug?: string,
    category?: string
}

export async function getItem(options: itemOptions = {}) : Promise<ItemResponse | ItemSingleResponse> {
    const {slug, ...filters }  = options;
    if (slug && slug.length > 1) {
        return request<ItemSingleResponse>(`/items/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<ItemResponse>(`/items?${params}`)
    }
}