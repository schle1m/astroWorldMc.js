const base = "https://api.astroworldmc.com/v1";
import { APIError } from "./error";

export async function request<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${base}${endpoint}`);
    const data = await response.json()
    if (!response.ok && data.data) {
        throw new APIError(response.status, data)
    }
    return data as T;
}