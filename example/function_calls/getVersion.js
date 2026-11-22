const {getVersion} = require("astroworldmc.js")

async function main(slug, type, edition) {
    const res = await getVersion({slug, type, edition});
    console.log(res)
}
main("", "", "")