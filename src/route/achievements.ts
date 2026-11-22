import { createParams } from "../helpers/createParams";
import { request } from "../helpers/req"
import type { AchievementOptions, AchievementSlugOptions, achievementssResponse, achievementssResponseSingular } from "../typings/achievements"

export function getAchievement(options: AchievementSlugOptions): Promise<achievementssResponseSingular>;
export function getAchievement(options?: AchievementOptions & { slug?: undefined }): Promise<achievementssResponse>;
export function getAchievement(options: AchievementOptions): Promise<achievementssResponse | achievementssResponseSingular>;
export async function getAchievement(options: AchievementOptions = {}): Promise<achievementssResponse | achievementssResponseSingular> {
    const {slug, ...filters} = options;
    if (slug && slug.length > 0) {
        return request<achievementssResponseSingular>(`/achievements/${encodeURIComponent(slug)}`);
    } else {
        const params = createParams(filters)
        return request<achievementssResponse>(`/achievements/?${params}`)
    }
}