const {getCommand} = require("astroworldmc.js")

async function main(slug, search, category, permissionLevel) {
    const res = await getCommand({slug, search, category, permissionLevel});
    console.log(res)
}
main("", "", "", "")