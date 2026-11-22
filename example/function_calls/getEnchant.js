const {getEnchant} = require("astroworldmc.js")

async function main(slug, search, category) {
    const res = await getEnchant({slug, search, category});
    console.log(res)
}
main("", "")