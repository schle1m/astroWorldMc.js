export interface Enchantment {
    name: string;
    id: string;
    maxLevel: number;
    description: string;
    effectPerLevel: string[];
    applicableItems: string[];
    incompatibleWith: string[];
    obtainedFrom: string[];
    weight: number;
    treasureOnly: boolean;
    curseOf: boolean;
    versionAdded: string;
    category: string;
    notes: string;
}

export interface EnchantmentsResponse {
    success: boolean
    count: number;
    data: Enchantment[];
}
export interface EnchantmentSingleResponse {
    success: boolean;
    data: Enchantment;
}

export interface EnchantOptions {
    slug?: string;
    search?: string;
    category?: string;
}
export interface EnchantSlugOptions extends EnchantOptions {
    slug: string;
}