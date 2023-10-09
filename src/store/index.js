import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../reducer/contadorReducer'

export const store = configureStore({
  reducer: { contador : contadorReducer },
})