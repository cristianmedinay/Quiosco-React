import React from 'react'
import { productos } from '../data/productos'
import Productos from '../components/Productos'
const Inicio = () => {
  return (
    <div>
      <h1 className='text-4xl font-black'>Inicio</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuacion.</p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {
          productos.map(producto => (

            <Productos {...producto} key={producto.id} />

          ))
        }
      </div>


    </div>
  )
}

export default Inicio