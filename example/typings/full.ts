import { getMob } from "astroworldmc.js";
import type { Mob, MobSlugOptions, MobOptions, MobSingleResponse, MobsResponse } from "astroworldmc.js"


//No Slug shows an example of typed without slug usage
// -  MobOptions instead of MobSlug Options and MobResponse instead of MobSingleResponse
async function noSlug() {
    const options = { search: "", type: "", category: "" } satisfies MobOptions;
    const res: MobsResponse = await getMob(options);
    console.log(res) //full response with count, succes and data array
    const mob: Mob = res.data[0] //a single mob entry 
    console.log(mob)
}
//Slug Shows an example of typed with Slug Usage 
// - MobSlugOptions instead of MobOptions and MobSingleResponse instead of MobResponse
async function Slug() {
    const options = { slug: "", search: "", type: "", category: "" } satisfies MobSlugOptions
    const res: MobSingleResponse = await getMob(options);
    console.log(res) //full response with succes and data array
    const mob: Mob = res.data //a single mob entry no [0] as data is already the object 
    console.log(mob)
}
//Slug()
noSlug()