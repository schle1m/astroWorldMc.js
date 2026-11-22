import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type { CommandOptions, CommandSlugOptions, CommandResponse, CommandResponseSingel } from "../typings/commands";

export function getCommand(options: CommandSlugOptions): Promise<CommandResponseSingel>
export function getCommand(options?: CommandOptions & {  slug?: undefined }): Promise<CommandResponse>;
export function getCommand(options: CommandOptions): Promise<CommandResponse | CommandResponseSingel>

export async function getCommand(options: CommandOptions = {}): Promise<CommandResponse | CommandResponseSingel> {
    const {slug,  ...filters} = options;
    if (slug && slug.length > 0) {
        return request<CommandResponseSingel>(`/commands/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<CommandResponse>(`/commands?${params}`);
    }
}