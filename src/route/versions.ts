import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type {VersionOptions,  VersionSlugOptions, VersionsResponse, VersionsResponseSingle } from "../typings/versions"

export function getVersion(options: VersionSlugOptions): Promise<VersionsResponseSingle>;
export function getVersion(options?: VersionOptions & { slug?: undefined }): Promise<VersionsResponse>
export function getVersion(options: VersionOptions): Promise<VersionsResponse | VersionsResponseSingle>

export async function getVersion(options: VersionOptions = {}): Promise<VersionsResponse | VersionsResponseSingle> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 0) {
        return request<VersionsResponseSingle>(`/versions/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<VersionsResponse>(`/versions?${params}`)
    }
}