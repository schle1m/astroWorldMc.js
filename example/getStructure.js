const {getStructure} = require("astroworldmc.js")

async function main(slug, dimension, rarity, category) {
    const res = await getStructure({slug, dimension, rarity, category});
    console.log(res)
}
main("", "", "", "")