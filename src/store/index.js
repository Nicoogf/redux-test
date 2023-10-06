import { configureStore } from '@reduxjs/toolkit'


//Configuracion de store
export const store = configureStore({
  reducer: {
    constador : reducerContador 
  },
})