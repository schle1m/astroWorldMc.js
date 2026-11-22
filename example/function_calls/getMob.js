const {getMob} = require("astroworldmc.js")

async function main(slug, search, type, category) {
    const res = await getMob({slug, search, type, category});
    console.log(res)
}
main("", "", "", "")