const estadoInicial = {
    contador : 0 
}


// El action recibe el tipo y el Payload
// En el action va a llegar la accion  "SUMAR_UNO"

export default function contadorReducer ( estado = estadoInicial , accion ) {
    switch (accion.type) {
        case "SUMAR_UNO" : {
            return {
                ...estado ,
                constador :  estado.contador + 1
            }
        }
        case "RESTAR_UNO" :{
            return{
                ...estado ,
                contador: estado.contador - 1 
            }
        }
        case "SUMAR_CINCO" : {
            return{
                ...estado,
                contador : estado.contador + accion.payload
            }
        }
        case "RESTAR_CINCO" :{
            return{
                ...estado,
                contador :  estado.contador - accion.payload
            }
        }
        case "RESET" : {
            return{
                ...estado,
                contador : 0
            }
        }
         default :
         return estate
         
    }
}