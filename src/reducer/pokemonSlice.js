import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name : 'pokemon' ,
    initialState : {
        page : 0 ,
        pokemons : [] ,
        isLoading : false ,
        error : null
    },
    reducers :{
        loadingPokemons : ( estado ) => {
            estado.isLoading = true ;
        },
        fetchPokemons : ( estado , accion ) =>{
            estado.isLoading = false  ;
            estado.page = accion.payload ;
            estado.pokemons = accion.payload.pokemons
        },
        failedFetch : ( estado , accion  ) => {
            estado.isLoading = false ;
            estado.error = accion.payload.error
        }
    }
})

export const { loadingPokemons, fetchPokemons , failedFetch } = pokemonSlice.actions
