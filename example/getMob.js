const {getMob} = require("astroworldmc.js")

async function main(id, type) {
    const res = await getMob({id, type});
    console.log(res)
}
main("", "passive")