import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { TradeResponse } from "../typings/trades";

interface options {
    slug?: string,
    search?: string
}
export async function getTrades(options: options = {}): Promise<TradeResponse> {
    const {slug, ...filters} = options;
    if (slug) {
        return request<TradeResponse>(`/trades/${encodeURIComponent(slug)}`)
    } else  {
        const params = createParams(filters)
        return request<TradeResponse>(`/trades?${params}`)
    } 
}