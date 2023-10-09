const estadoInicial = {
    contador : 0 
}

function elReducer ( estado = estadoInicial , accion ) {
 switch  ( estado.type ) {
    case "SUMAR_UNO" : {
        return {
            ...estado ,
            contador : estado.contador + 1  
        }
    }
    case "SUMAR_CINCO" : {
        return{
            ...estado,
            contador : estado.contador + accion.payload
        }
    }
    case "RESTAR_UNO"  :{
        return{
            ...estado ,
            contador: estado.contador - 1
        }
    }
    case "RESUTAR_CINCO" : {
        return{
            ...estado ,
            contador :estado.contador - accion.payload
        }
    }
    case "RESET" : {
        return{
            ...estado,
            contador : 0
        }
    }
    default:
        return estado
 }
}