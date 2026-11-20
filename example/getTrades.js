const {getTrades} = require("astroworldmc.js")

async function main(name) {
    const res = await getTrades({name});
    console.log(res)
}
main("fletcher")