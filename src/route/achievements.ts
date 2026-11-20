import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { achievementssResponse, achievementssResponseSingular } from "../typings/achievements"

interface opts {
    slug?: string,
    search?: string;
    tab?: string;
    difficulty?: string
}
export async function getAchievement(options: opts = {}): Promise <achievementssResponse | achievementssResponseSingular> { 
    const {slug, ...filters} = options;
    if (slug && slug.length > 0) {
        return request<achievementssResponseSingular>(`/achievements/${encodeURIComponent(slug)}`);
    } else {
        const params = createParams(filters)
        return request<achievementssResponse>(`/achievements/?${params}`)
    }
}