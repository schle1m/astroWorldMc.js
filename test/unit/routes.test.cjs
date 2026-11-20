const assert = require("node:assert/strict");
const test = require("node:test");
const requestModule = require("../../dist/helpers/req.js");
const routes = require("../../dist/route/index.js");

const data = [
    [routes.getAchievement, "/achievements/", "getting-an-upgrade",  { search: "s", tab: "t", difficulty: "d" }],
    [routes.getBiome, "/biomes", "plains", { search: "s", dimension: "d", category: "c", rarity: "r" }],
    [routes.getCommand, "/commands", "give", { search: "s", category: "c", permissionLevel: "p" }],
    [routes.getEnchant, "/enchantments", "sharpness", { search: "s", category: "c" }],
    [routes.getItem, "/items", "diamond_sword", { search: "s", category: "c" }],
    [routes.getMob, "/mobs", "zombie", { search: "s", type: "t", category: "c" }],
    [routes.getStructure, "/structures", "village", { search: "s", rarity: "r", dimension: "d", category: "c" }],
    [routes.getTrades, "/trades", "farmer", { search: "s" }],
    [routes.getVersion, "/versions", "1.21", { type: "t", edition: "java" }]
];

for (const [route, path, slug, filters] of data) {
    test(route.name, async (t) => {
        const originalRequest = requestModule.request;
        const calls = []
        const response = {}
        requestModule.request = async (endpoint, hasv1) => {
            calls.push([endpoint, hasv1]);
            return response;
        };
        t.after(() => { requestModule.request = originalRequest; })

        const check  = async (options, endpoint,  hasv1) => {
            assert.equal(   await route(options), response);
            assert.deepEqual(calls.pop(), [endpoint, hasv1]);
        }
        const list = (query) => `${path}?${query}`;
        const detail = `${path.replace(/\/$/, "")}/${encodeURIComponent(slug)}`
        await check(undefined, list(""), undefined)
        for (const [key, value] of Object.entries(filters)) {
            await check({ [key]: value }, list(`${key}=${value}`), undefined);
        }
        await check(filters, list(Object.entries(filters).map(([k, v]) => `${k}=${v}`).join("&")), undefined);
        await check({ slug }, detail, undefined);
        await check({ slug, ...filters }, detail, undefined);
        assert.equal(calls.length, 0)
    });
}

test("getHealth", async (t) => {
    const originalRequest = requestModule.request;
    const calls = []
    const response = {};
    requestModule.request = async (...args) => {
        calls.push(args);
        return response;
    };
    t.after(() => { requestModule.request = originalRequest; })
    assert.equal(
        await routes.getHealth(),
        response
    )
    assert.deepEqual(calls, [["/api/health", false]])
});
