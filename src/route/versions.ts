import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { VersionsResponse, VersionsResponseSingle } from "../typings/versions"

interface options {
    slug?: string
    type?: string;
    edition?: string;
}

export async function getVersion(options: options = {}): Promise<VersionsResponse | VersionsResponseSingle> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 1) {
        return request<VersionsResponseSingle>(`/versions/${encodeURIComponent(slug)}`)
    } else {
        const params = createParams(filters)
        return request<VersionsResponse>(`/versions?${params}`)
    }
}