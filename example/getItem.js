const {getItem} = require("astroworldmc.js")

async function main(slug, category) {
    const res = await getItem({slug, category});
    console.log(res)
    res.data.forEach(item => {
        if (item.name.toLowerCase().includes("")) {
            console.log(item);
        }
    })
}
main("", "")