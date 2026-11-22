import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req";
import type {StructureOptions, StructureSlugOptions, StructuresResponse, StructuresResponseSingle } from "../typings/structure";

export function getStructure(options: StructureSlugOptions): Promise<StructuresResponseSingle>;
export function getStructure(options?: StructureOptions & { slug?: undefined }): Promise<StructuresResponse>;
export function getStructure(options: StructureOptions): Promise<StructuresResponse | StructuresResponseSingle>

export async function getStructure(options: StructureOptions = {}): Promise<StructuresResponse | StructuresResponseSingle> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 0) {
        return request<StructuresResponseSingle>(`/structures/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<StructuresResponse>(`/structures?${params}`)
    }
}