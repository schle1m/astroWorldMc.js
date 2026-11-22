export interface Version {
    slug: string;
    name: string;
    edition: string;
    releaseDate: string;
    type: string,
    updateName: string;
    majorFeatures: string[];
    notableChanges: string[];
    notableFixes: string[];
    previousVersion: string | null;
    nextVersion: string | null;
}
export interface VersionsResponse {
    success: boolean;
    count: number;
    data: Version[];
}
export interface VersionsResponseSingle {
    success: boolean;
    data: Version[];
}

export interface VersionOptions {
    slug?: string;
    type?: string;
    edition?: string;
}

export interface VersionSlugOptions extends VersionOptions {
    slug: string;
}