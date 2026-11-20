import { request } from "../helpers/req";
import type { ItemResponse, ItemSingleResponse } from "../typings/items";

interface itemOptions {
    slug?: string,
    category?: string
}

export async function getItem(options: itemOptions = {}) : Promise<ItemResponse | ItemSingleResponse> {
    const {slug, category }  = options;
    if (slug && slug.length > 1) {
        return request<ItemSingleResponse>(`/items/${encodeURIComponent(slug)}`)
    } else if (category) {
        return request<ItemResponse>(`/items?category=${encodeURIComponent(category)}`)
    } else {
        return request<ItemResponse>(`/items`)
    }
}