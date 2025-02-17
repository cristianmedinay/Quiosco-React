import React from 'react'

import { SettinsDiv,InputForm, LabelForm } from '../twc-components/ManageCodeEditor'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      
      <h1>Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar Sesión</p>

      
      <SettinsDiv >
            <form action="">
             
               <div className='mb-4'>
    
                  <LabelForm  >Email:</LabelForm>
                  <InputForm 
                    name='email'  id="email" type="text" placeholder="Tu Email" />
    
               </div>
               
               <div className='mb-4'>
    
                  <LabelForm htmlFor='password' >Password:</LabelForm>
                  <InputForm 
                    name='password'  id="password" type="password" placeholder="Tu Password" />
    
               </div>
             
               <input type="sumit" value={'Iniciar Sesión'} className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold p-3 w-full mt-5 uppercase font-bold cursor-pointer text-center'/>
            </form>
    
          </SettinsDiv>


          <nav className='mt-5'>
            <Link to="/auth/registro">
              ¿No tienes una cuenta? Registrate

            </Link>

          </nav>


          </div>
  )
}
