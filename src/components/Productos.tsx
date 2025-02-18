import React from 'react'

import {formatearDinero} from '../helpers'    
interface ProductosProps {
    id:number,
    precio: number,
    nombre: string,
    imagen: string
   
}
const Productos = (productos: ProductosProps) => {

  const {imagen, precio, nombre} = productos
    
  return (
        
        
        <div className='border-t-0 p-3 shadow-md bg-white'>

            <img src={`../public/img/${imagen}.jpg`} alt={`${imagen}`} className='w-full '/>

            <div className='p-5'>
                <h3 className='text-2xl font-bold'> {nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)} </p>

                <button 
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold p-3 w-full mt-5 uppercase font-bold cursor-pointer text-center'
                 > 
                    Agregar
                </button>
            </div>
        </div>

  )
}

export default Productos