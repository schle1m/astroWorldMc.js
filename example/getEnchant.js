const {getEnchant} = require("astroworldmc.js")

async function main(id, category) {
    const res = await getEnchant({id, category});
    console.log(res)
}
main("", "melee")