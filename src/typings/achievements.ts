export interface achievement {
    slug: string;
    name: string;
    id: string;
    description: string;
    tab: string;
    icon: string
    howToComplete: string;
    parent: string | null;
    difficulty: string;
    xpReward: number
    prerequisites: string[];
    versionAdded: string;
    rewards: string;
    isChallenge: boolean;
    isGoal: boolean
}
export interface achievementssResponse {
    success: boolean;
    count: number
    data: achievement[];
}
export interface achievementssResponseSingular {
    success: boolean;
    data: achievement[];
}