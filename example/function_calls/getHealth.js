const {getHealth} = require("astroworldmc.js")

async function main() {
    const res = await getHealth();
    console.log(res)
}
main()