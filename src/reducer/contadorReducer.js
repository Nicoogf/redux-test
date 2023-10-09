import {RESET, RESTAR_CINCO, RESTAR_UNO, SUMAR_CINCO, SUMAR_UNO } from "../types" ;


const estadoInicial = {
    contador : 0 
}

export default function contadorReducer ( estado = estadoInicial , accion ) {
 switch  ( accion.type ) {
    case SUMAR_UNO : {
        return {
            ...estado ,
            contador : estado.contador + 1  
        }
    }
    case SUMAR_CINCO : {
        return{
            ...estado,
            contador : estado.contador + accion.payload
        }
    }
    case RESTAR_UNO  :{
        return{
            ...estado ,
            contador: estado.contador - 1
        }
    }
    case RESTAR_CINCO : {
        return{
            ...estado ,
            contador :estado.contador - accion.payload
        }
    }
    case RESET : {
        return{
            ...estado,
            contador : 0
        }
    }
    default:
        return estado
 }
}