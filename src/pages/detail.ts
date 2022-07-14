import Pokemon from "../models/pokemon";
import { get } from "../api/pokemon"

const Detail = {
    render: async function (id) {
        const poke = await get(id)
        console.log(poke)
        const pokemons: Pokemon[] = poke.data

        return `
            <div class="container mx-auto  border border-info " style="width: 200px;">
                <img src="${pokemons.image}" alt=""  style="width: 170px;">
                <h4 class="ms-4">${pokemons.name}</h4>
                <div class="ms-4">
                    ${pokemons.type.map(loai => `
                        ${loai.type.name}
                    `).join('|')}
                </div>
                <div class="ms-3 ">
                    Weight:${pokemons.weight} -
                    Height:${pokemons.height}
                </div>
            </div>
           
        `
    }
}
export default Detail