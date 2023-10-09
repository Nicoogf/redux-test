import { RESET, RESTAR_CINCO, RESTAR_UNO, SUMAR_CINCO, SUMAR_UNO } from "../types"

export const sumarUno = () => (
    {type : SUMAR_UNO}
)

export const sumarCinco = () =>(
    {type: SUMAR_CINCO , payload : 5}
)

export const restarUno = () =>(
    {type : RESTAR_UNO}
)

export const restarCinco = () => (
    {type : RESTAR_CINCO , payload : -5 }
)

export const reset = () => (
    {type : RESET}
)