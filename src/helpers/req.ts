const base = "https://api.astroworldmc.com/v1";
import { APIError } from "./error";

export async function request<T>(endpoint: string, hasv1: boolean = true): Promise<T> {
    let response;
    if (hasv1) {
        response = await fetch(`${base}${endpoint}`);
    } else {
        response = await fetch(`https://api.astroworldmc.com${endpoint}`)
    }
    const data = await response.json()
    if (!response.ok && data.data) {
        throw new APIError(response.status, data)
    }
    return data as T;
}