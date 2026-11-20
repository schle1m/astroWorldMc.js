import { request } from "../helpers/req";
import type { health } from "../typings/health";

export async function getHealth(): Promise<health> {
    return request<health>("/api/health", false)
}