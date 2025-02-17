import React from 'react'
import {categorias} from '../data/categorias'
import Categoria from './Categoria'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Sidebar = () => {
  return (
    <div className='md:w-72'>
        <div className='p-4'>
            <img src="img/logo.svg" alt="Logo" />
            
        </div>

        <div className='mt-10'>
            {
                categorias.map(categoria => (
                   <Categoria key={categoria.id} {...categoria} />
                ))
            }

        </div>

        <div className='my-5 px-5'>
            <button 
                type='button'
                className='text-center bg-red-500 w-full p-3 font-bold text-white'
                >
                    Cancelar Orden
            </button>

        </div>
    </div>
  )
}

export default Sidebar