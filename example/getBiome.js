const {getBiome} = require("astroworldmc.js")

async function main(biome, dimension, rarity) {
    const res = await getBiome({slug: biome, dimension, rarity});
    console.log(res)
}
main("", "end", "")