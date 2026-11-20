import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { VersionsResponse } from "../typings/versions"

interface options {
    type?: string
}

export async function getVersion(options: options = {}): Promise<VersionsResponse> {
    const {...filters} = options;
    const params = createParams(filters)
    return request<VersionsResponse>(`/versions?${params}`)
}