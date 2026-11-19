export class APIError extends Error {
    constructor(public status: number, public data: unknown) {
        super(`AstroWorldMC API Error : ${status}`)
        this.name = "APIError"
    }
}