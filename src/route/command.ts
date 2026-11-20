import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { CommandResponse, CommandResponseSingel } from "../typings/commands";

interface opts {
    slug?: string,
    category?: string,
    permissionLevel?: string
}
export async function getCommand(options: opts = {}): Promise <CommandResponse | CommandResponseSingel> {
    const {slug,  ...filters} = options;
    if (slug && slug.length > 0) {
        return request<CommandResponseSingel>(`/commands/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<CommandResponse>(`/commands?${params}`);
    }
}