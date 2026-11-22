import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { EnchantOptions, EnchantSlugOptions,  EnchantmentSingleResponse,  EnchantmentsResponse  } from "../typings/enchantment";

export function getEnchant(options: EnchantSlugOptions): Promise<EnchantmentSingleResponse>
export function getEnchant(options?: EnchantOptions & { slug?: undefined }): Promise<EnchantmentsResponse>;
export function getEnchant(options: EnchantOptions): Promise<EnchantmentsResponse | EnchantmentSingleResponse>

export async function getEnchant(options: EnchantOptions = {}): Promise<EnchantmentsResponse | EnchantmentSingleResponse> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 0) {
        return request<EnchantmentSingleResponse>(`/enchantments/${encodeURIComponent(slug)}`)
    } else {
        const parms = createParams(filters)
        return request<EnchantmentsResponse>(`/enchantments?${parms}`)
    }
}