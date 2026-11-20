import { request } from "../helpers/req"
import type { VersionsResponse } from "../typings/versions"

interface options {
    type?: string
}

export async function getVersion(options: options = {}): Promise<VersionsResponse> {
    const {type } = options;
    if (type) {
        return request<VersionsResponse>(`/versions?type=${encodeURIComponent(type)}`)
    } else {
        return request<VersionsResponse>(`/versions`);
    }
}