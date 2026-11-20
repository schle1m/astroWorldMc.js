const {getVersion} = require("astroworldmc.js")

async function main(type) {
    const res = await getVersion({type});
    console.log(res)
}
main("majeor-release")