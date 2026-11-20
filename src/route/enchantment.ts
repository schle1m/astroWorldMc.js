import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { EnchantmentSingleResponse, EnchantmentsResponse } from "../typings/enchantment";

interface enchantOptions {
    slug?: string,
    search?: string;
    category?: string;
}
export async function getEnchant(options: enchantOptions = {}): Promise <EnchantmentsResponse | EnchantmentSingleResponse> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 0) {
        return request<EnchantmentSingleResponse>(`/enchantments/${encodeURIComponent(slug)}`)
    } else {
        const parms = createParams(filters)
        return request<EnchantmentsResponse>(`/enchantments?${parms}`)
    }
}