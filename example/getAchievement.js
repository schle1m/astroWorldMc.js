const {getAchievement} = require("astroworldmc.js")

async function main(slug, tab, difficulty) {
    const res = await getAchievement({slug, tab, difficulty});
    console.log(res)
}
main("", "", "hard")