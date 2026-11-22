const {getItem} = require("astroworldmc.js")

async function main(slug, search, category) {
    const res = await getItem({slug, search, category});
    console.log(res)
}
main("", "", "")