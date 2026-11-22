const {getTrades} = require("astroworldmc.js")

async function main(slug, search) {
    const res = await getTrades({slug, search});
    console.log(res)
}
main("", "")