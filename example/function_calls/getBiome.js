const {getBiome} = require("astroworldmc.js")

async function main(slug, biome, dimension, rarity, search) {
    const res = await getBiome({slug, biome, dimension, rarity, search});
    console.log(res)
}
main("", "", "", "", "")