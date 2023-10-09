import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../reducer/contadorSlice';

export const store = configureStore({
  reducer: {
    contador: counterSlice.reducer,
  },
});
