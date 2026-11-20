const assert = require("node:assert/strict");
const test  = require("node:test");
const { createParams } = require("../../dist/helpers/createParams.js");
const {APIError } = require("../../dist/helpers/error.js");
const { request } = require("../../dist/helpers/req.js");

test("createParams",  () =>{
    assert.equal(
        createParams({ search: "diamond sword", empty: "", missing: undefined, zero: 0 }), "search=diamond+sword&zero=0"
    )
    assert.throws(() => createParams(null), { message: "Invalid Filter Structure" });
})
test("APIError", ()=> {
    const data = { data: "missing" };;
    const error = new APIError(404, data);
    assert.ok(error instanceof Error)
    assert.equal(error.name, "APIError");
    assert.equal(error.status, 404)
    assert.equal(error.data, data)
});

test("Request Urls", async (t) => {
    const originalFetch = global.fetch
    const urls = []
    global.fetch =  async (url)=> {
        urls.push(url);
        return { ok: true, json: async () => ({ success: true }) };
    }
    t.after(() => { global.fetch = originalFetch; })
    await request("/items");
    await request("/api/health", false)
    assert.deepEqual(urls, [
        "https://api.astroworldmc.com/v1/items",
        "https://api.astroworldmc.com/api/health"
    ])
});

test("Request error hndler", async (t) => {
    const originalFetch = global.fetch;
    const data = { data: "missing" };
    global.fetch = async () => ({ok: false, status: 404, json: async () => data})
    t.after(() => { global.fetch = originalFetch; })
    await assert.rejects(request("/missing"), (error) => error instanceof APIError && error.status === 404 && error.data === data)
});
