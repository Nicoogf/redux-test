import{ put , takeEvery }  from 'redux-saga/effects';
import { failedFetch, loadingPokemons } from '../reducer/pokemonSlice';

const fetchPokemons = async () =>{
    const response = await fetch (`https://randomuser.me/api/?4${page}&results=10`)
    const data = await response.json()
    return data ;
}

function* getPokemons( accion ) {
    const page = accion.payload
    try {
        yield put ( loadingPokemons())

        const data = yield call( fetchPokemons, page)
        
        yield put( fetchPokemons({ pokemons : data.results , page : page  }))

    } catch (error) {
         yield  put ( failedFetch( {erro: error.message} ))
    }
}

//saga principal para observar la accion de get pokemon

function* watchgetPokemons( ) {
    yield takeEvery('pokemon/fetchPokemons' , getPokemons)
}

export default watchgetPokemons ; 