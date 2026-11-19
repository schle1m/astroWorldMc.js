const {getBiome} = require("astroworldmc.js")

async function main(biome, dimension, rarity) {
    const res = await getBiome({dimension, biome, rarity});
    console.log(res)
}
main("", "", "uncommon")