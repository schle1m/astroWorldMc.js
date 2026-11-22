export interface Villager {
    id: string;
    name: string;
    workstation: string;
    description: string;
    biomeSpecific: boolean;
    levels: {
        level: number;
        name: string;
        trades: {
            gives: string;
            givesAmount: number;
            receives: string;
            receivesAmount: number;
            edition: string;
            maxUses: number;
            priceEmeralds?: {
                min: number;
                max: number;
            };
            notes?: string;
        }[];
    }[];
}

export interface TradeResponse {
    success: boolean;
    count: number;
    data: Villager[];
}

export interface TradeOptions {
    slug?: string;
    search?: string;
}
export interface TradeSlugOptions extends TradeOptions {
    slug: string;
}