import { request } from "../helpers/req";
import type { EnchantmentSingleResponse, EnchantmentsResponse } from "../typings/enchantment";

interface enchantOptions {
    id?: string,
    category?: string;
}
export async function getEnchant(options: enchantOptions = {}): Promise <EnchantmentsResponse | EnchantmentSingleResponse> {
    const {id, category} = options;
    if (id) {
        return request<EnchantmentSingleResponse>(`/enchantments/${encodeURIComponent(id)}`);;
    } else if (category) {
        return request<EnchantmentsResponse>(`/enchantments/?category=${encodeURIComponent(category)}`)
    } else {
        return request<EnchantmentsResponse>(`/enchantments`);
    }
}