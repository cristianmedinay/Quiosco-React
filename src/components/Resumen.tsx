import React from 'react'
import { useQuiosco } from '../hooks/useQuiosco'

const Resumen = () => {

  const { pedido } = useQuiosco();

  return (
    <div className='w-72 h-screen overflow-y-scroll p-5 '>
      <h1 className='text-4xl font-black'> Mi pedido </h1>
      <p className='text-lg my-5'>
        Aqui podras ver el resumen y totales de tu pedido
      </p>  

      <div className='py-10'>
          {pedido.length===0 ? (
            <p className='text-center text-2xl'>No hay elementos en tu pedido</p>	
          ) : (
            <p>Si hay algo </p>
          )
        
          }

      </div>

        <p className='text-xl mt-10'> 
          Total: {''}
        </p>

        <form action="" className='w-full'>
          <div className='mt-5'>
            <input type="submit" className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold px-5 py-2 w-full mt-5 uppercase font-bold cursor-pointer text-center rounded cursor-pointer' value={'Comfirmar Pedido'}/>

          </div>

        </form>
    </div>
  )
}

export default Resumen