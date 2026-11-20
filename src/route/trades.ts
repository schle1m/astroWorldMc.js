import { request } from "../helpers/req";
import type { TradeResponse } from "../typings/trades";

interface options {
    name?: string
}
export async function getTrades(options: options = {}): Promise<TradeResponse> {
    const {name} = options;
    if (name) {
        return request<TradeResponse>(`/trades/${encodeURIComponent(name)}`)
    } else  {
        return request<TradeResponse>("/trades")
    } 
}