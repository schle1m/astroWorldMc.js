const {getCommand} = require("astroworldmc.js")

async function main(category, permissionLevel) {
    const res = await getCommand({category, permissionLevel});
    console.log(res)
}
main("player", "2")