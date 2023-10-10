import { failedFetch, fetchPokemons, loadingPokemons } from "../reducer/pokemonSlice" ;

export const  getPokemons =  ( page = 0 ) =>{
    return async ( dispatch) => {
        dispatch( loadingPokemons())

        try{
            const response = await fetch  (`https://randomuser.me/api/?4${page}&results=10`)
            const data = await response.json()
            dispatch( fetchPokemons({ pokemons : data.results , page : page + 1 }))
        }catch ( error ){
            dispatch ( failedFetch( {error : error.message }) )
        }
    }
}