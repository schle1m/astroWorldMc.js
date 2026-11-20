import { request } from "../helpers/req";
import type { EnchantmentSingleResponse, EnchantmentsResponse } from "../typings/enchantment";

interface enchantOptions {
    slug?: string,
    category?: string;
}
export async function getEnchant(options: enchantOptions = {}): Promise <EnchantmentsResponse | EnchantmentSingleResponse> {
    const {slug, category} = options;
    if (slug) {
        return request<EnchantmentSingleResponse>(`/enchantments/${encodeURIComponent(slug)}`);;
    } else if (category) {
        return request<EnchantmentsResponse>(`/enchantments/?category=${encodeURIComponent(category)}`)
    } else {
        return request<EnchantmentsResponse>(`/enchantments`);
    }
}