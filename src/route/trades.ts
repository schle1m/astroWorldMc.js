import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { TradeOptions, TradeSlugOptions, TradeResponse } from "../typings/trades";

export function getTrades(options: TradeSlugOptions): Promise<TradeResponse>;
export function getTrades(options?: TradeOptions): Promise<TradeResponse>

export async function getTrades(options: TradeOptions = {}): Promise<TradeResponse> {
    const {slug, ...filters} = options;
    if (slug) {
        return request<TradeResponse>(`/trades/${encodeURIComponent(slug)}`)
    } else  {
        const params = createParams(filters)
        return request<TradeResponse>(`/trades?${params}`)
    } 
}