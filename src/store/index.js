import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../reducer/contadorSlice';
import thunk from 'redux-thunk' ;
import { pokemonSlice } from '../reducer/pokemonSlice';

export const store = configureStore({
  reducer: {
    contador: counterSlice.reducer,
    pokemons : pokemonSlice.reducer
  },
  middleware: [ thunk ]
});
