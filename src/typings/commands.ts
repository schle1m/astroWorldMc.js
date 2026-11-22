export interface Cmdparams {
    name: string;
    type: string;
    optional: boolean;
    description: string;
}
export interface CmdExample {
    code: string;
    explanation: string;
}
export interface MinecraftCommand {
    name: string;
    syntax: string
    description: string
    parameters: Cmdparams[];
    permissionLevel: number;
    versionAdded: string;
    category: string;
    examples: CmdExample[];
    commonMistakes: string[];
    relatedCommands: string[];
    notes: string;
}
export interface CommandResponse {
    success: boolean;
    count: number,
    data: MinecraftCommand[];
}
export interface CommandResponseSingel {
    success: boolean;
    data: MinecraftCommand[];
}

export interface CommandOptions {
    slug?: string;
    search?: string;
    category?: string;
    permissionLevel?: string;
}

export interface CommandSlugOptions extends CommandOptions {
    slug: string;
}