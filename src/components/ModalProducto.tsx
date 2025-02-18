import React, { useState } from 'react'
import { useQuiosco } from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

const ModalProducto = ( ) => {

  const { producto , handleClickModal } = useQuiosco();

  const { nombre, imagen, precio } = producto!

  const [cantidad, setCantidad] = useState(1)

  return (
    <div className='md:flex items-center gap-10'>
        
        <div className='md:w-1/3'>
            <img src={`../public/img/${imagen}.jpg`} alt={`Imagen producto ${nombre}`} />
        </div>       
        <div className='md:w-2/3'>
            <div className='flex justify-end'> 
                <button onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>

            <h1 className='text-3xl font-bold mt-5'> {nombre}  </h1>
            <p> Precio: { formatearDinero(precio) }</p>

            <div className='flex gap-4 mt-5'>
                <button 
                    type='button'
                    onClick={() => {
                        if(cantidad >= 1) return setCantidad(cantidad - 1)
                        
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                        </svg>
                </button>

                <p className='text-2xl'>{cantidad}</p>

                <button
                    type='button'
                    onClick={() => {
                        if(cantidad <= 4) return setCantidad(cantidad + 1)
                        
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                </button>                        

            </div>
            <button 
                type='button' 
                className='bg-indigo-600 hover:bg-indigo-800 text-white 
                font-bold p-3 w-full mt-5 uppercase font-bold cursor-pointer text-center'>

                Añadir al Pedido
            </button>
        </div>
    </div>
  )
}

export default ModalProducto