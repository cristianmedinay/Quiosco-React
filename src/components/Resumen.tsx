import React from 'react'
import { useQuiosco } from '../hooks/useQuiosco'
import { ResumenProducto } from './ResumenProducto';
import { formatearDinero } from '../helpers';


const Resumen = () => {

  const { pedido,total } = useQuiosco();
  
  const comprobarPedido = () => {
    return pedido.length === 0
  }

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
            
            pedido.map(producto => (
       
              <ResumenProducto producto={producto} key={producto.id} />

            ))
          )
        
          }

      </div>

        <p className='text-xl mt-10'> 
          Total: { total ? formatearDinero(total) : formatearDinero(0) }
        </p>

        <form action="" className='w-full'>
          <div className='mt-5'>
            <input type="submit" className={`${comprobarPedido() ? 'bg-indigo-100' : ' bg-indigo-600 hover:bg-indigo-800'}
             text-white font-bold px-5 py-2 w-full mt-5 uppercase 
             font-bold cursor-pointer text-center rounded cursor-pointer`} value={'Comfirmar Pedido'}
            disabled={comprobarPedido()}
            />

          </div>

        </form>
    </div>
  )
}

export default Resumen