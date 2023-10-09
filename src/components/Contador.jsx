import React from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { reset, restarCinco, restarUno, sumarCinco, sumarUno } from '../actions/contadorAction';

const Contador = () => {

    const estado = useSelector( (estado) => estado.contador )

    const dispatch = useDispatch() ;


  return (
    <div className='flex flex-col justify-center items-center'>

        <h2 className='text-center'> Contador Practica </h2>

        <p className='text-4xl font-bold my-5 border-2 p-4 border-black'> { estado.contador } </p>

        <nav className='flex flex-row gap-8 mx-auto '>  

            <button 
                className='p-4 bg-blue-500 text-white font-bold rounded-full'
                onClick= {() => dispatch( restarCinco() )}
                > - 5 </button>

            <button 
                className='p-4 bg-blue-500 text-white font-bold rounded-full'
                onClick= {() => dispatch( restarUno() )}> - 1 </button>

            <button className='py-4 px-6 bg-blue-500 text-white font-bold rounded-full'
                     onClick= {() => dispatch( reset() )} >   0 </button>

            <button className='p-4 bg-blue-500 text-white font-bold rounded-full'
                     onClick= {() => dispatch( sumarUno() )}> + 1 </button>

            <button className='p-4 bg-blue-500 text-white font-bold rounded-full'
                     onClick= {() => dispatch( sumarCinco() )}> + 5 </button>

        </nav>


    </div>
  )
}

export default Contador ;