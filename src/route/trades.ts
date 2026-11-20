import { request } from "../helpers/req";
import type { TradeResponse } from "../typings/trades";

interface options {
    slug?: string
}
export async function getTrades(options: options = {}): Promise<TradeResponse> {
    const {slug} = options;
    if (slug) {
        return request<TradeResponse>(`/trades/${encodeURIComponent(slug)}`)
    } else  {
        return request<TradeResponse>("/trades")
    } 
}