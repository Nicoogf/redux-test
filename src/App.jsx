import { Provider } from 'react-redux';
import './App.css' ;
import { store } from './store';
import Contador from './components/Contador';

function App() {
  return (
    <>
     <Provider store={store}>
     
          <div className='bg-red-500'>
            <h1 className='text-center font-bold text-white py-4'>Practica Redux</h1>
          </div>

           {/*Contador => Tiene que acceder al provider */}

           <div>
            <h2 className='text-center bg-red-200 py-4  font-bold'>Contador</h2>
           </div>

           <Contador />

      </Provider>
    </>
  )
}

export default App
