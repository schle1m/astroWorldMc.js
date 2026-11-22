const {getAchievement} = require("astroworldmc.js")

async function main(slug, tab, difficulty, search) {
    const res = await getAchievement({slug, tab, difficulty, search});
    console.log(res)
}
main("", "", "", "")