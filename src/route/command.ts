import { request } from "../helpers/req";
import type { CommandResponse } from "../typings/commands";

interface opts {
    category?: string,
    permissionLevel?: string
}
export async function getCommand(options: opts = {}): Promise <CommandResponse> {
    const { ...filters} = options;
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== "") {
            params.set(key, value);
        }
    }
    return request<CommandResponse>(`/commands?${params.toString()}`)
}