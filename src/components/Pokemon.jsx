import React from 'react' ;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../thunk/thunk';


const Pokemon = () => {

const { isLoading , pokemons = [] , page  , error } = useSelector ( estado => estado.pokemons) ;
console.log( {isLoading,pokemons,page,error})

const dispatch = useDispatch() ;

useEffect( () => {
    dispatch (getPokemons())
} , [])
  return (
    <div>
        <h1> Lista de Personajes </h1>
        {error && <p>No se pudo cargar los datos</p>}
        {isLoading && <p>Cargando Personas...</p>}
        <div>
            { pokemons.map((pokemon) => (
                <p key={pokemon.email}> { pokemon.name.first } </p>
            ))}
        </div>

        <button onClick={() => dispatch( getPokemons( page ))}> Siguente Pagina </button>

    </div>
  ) ;
} ; 

export default Pokemon ; 