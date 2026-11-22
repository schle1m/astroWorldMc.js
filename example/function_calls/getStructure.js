const {getStructure} = require("astroworldmc.js")

async function main(slug, search, dimension, rarity, category) {
    const res = await getStructure({slug, search,dimension, rarity, category});
    console.log(res)
}
main("", "", "", "", "")