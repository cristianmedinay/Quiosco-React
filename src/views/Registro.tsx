import React from 'react'

import { SettinsForm } from '../twc-components/ManageCodeEditor'



export const Registro = () => {
  return (

    <>
      <h1>Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <SettinsForm >
        <form action="">
           <div className='mb-4'>

              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Nombre:</label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                name='name'  id="name" type="text" placeholder="Tu Nombre" />

           </div>
           <div className='mb-4'>

              <label className='block text-gray-700 text-sm font-bold mb-2' >Email:</label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                name='email'  id="email" type="text" placeholder="Tu Nombre" />

           </div>
        </form>

      </SettinsForm>
    </>
  )
}
