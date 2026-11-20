export function createParams(filters: object) {
    if (typeof filters !== "object" || !filters) {
        throw new Error("Invalid Filter Structure")
    }
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== "") {
            params.set(key, value);
        }
    }
    const final = params.toString()
    return final;
}