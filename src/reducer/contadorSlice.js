import { createSlice } from '@reduxjs/toolkit';

const estadoInicial = {
    contador: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: estadoInicial, // Cambia "estadoInicial" a "initialState"
    reducers: {
        sumarUno: (estado) => {
            estado.contador += 1;
        },
        sumarCinco: (estado, action) => {
            estado.contador += action.payload;
        },
        restarUno: (estado) => {
            estado.contador -= 1;
        },
        restarCinco: (estado, action) => {
            estado.contador -= action.payload;
        },
        reset: (estado) => {
            estado.contador = 0;
        },
    },
});

export const { sumarUno, sumarCinco, restarUno, restarCinco, reset } = counterSlice.actions;

export default counterSlice.reducer; // Cambia "counterSlice" a "counterSlice.reducer"
