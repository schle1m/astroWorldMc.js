import type { Mob, MobSingleResponse, MobsResponse } from "astroworldmc.js";


//No Slug shows an example of typed without slug usage
// - MobResponse instead of MobSingleResponse
async function noSlug() {
    const response = await fetch(`https://api.astroworldmc.com/v1/mobs`)
    const json: MobsResponse = await response.json()
    console.log(json) //full response with count, succes and data array
    const mob: Mob = json.data[0] //a single mob entry 
    console.log(mob)
}
//Slug Shows an example of typed with Slug Usage 
// - MobSingleResponse instead of MobResponse
async function Slug() {
    const slug = "cow";
    const response = await fetch(`https://api.astroworldmc.com/v1/mobs/${slug}`)
    const json: MobSingleResponse = await response.json()
    console.log(json) //full response with count, succes and data array
    const mob: Mob = json.data //a single mob entry 
    console.log(mob)
}
//Slug()
noSlug()