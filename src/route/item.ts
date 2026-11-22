import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type {ItemOptions, ItemSlugOptions,  ItemResponse,  ItemSingleResponse} from "../typings/items";

export function getItem(options: ItemSlugOptions): Promise<ItemSingleResponse>;
export function getItem(options?: ItemOptions & { slug?: undefined }): Promise<ItemResponse>
export function getItem(options: ItemOptions): Promise<ItemResponse | ItemSingleResponse>;


export async function getItem(options: ItemOptions = {}): Promise<ItemResponse | ItemSingleResponse> {
    const {slug, ...filters }  = options;
    if (slug && slug.length > 0) {
        return request<ItemSingleResponse>(`/items/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<ItemResponse>(`/items?${params}`)
    }
}