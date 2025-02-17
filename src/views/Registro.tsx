import React from 'react'
import {Link } from 'react-router-dom'
import { SettinsDiv,InputForm, LabelForm } from '../twc-components/ManageCodeEditor'



export const Registro = () => {
  return (

    <>
      <h1>Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <SettinsDiv >
        <form action="">
           <div className='mb-4'>

              <LabelForm >Nombre:</LabelForm>
              <InputForm 
                name='name'  id="name" type="text" placeholder="Tu Nombre" />

           </div>
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
           <div className='mb-4'>

              <LabelForm htmlFor='password_confirmation' >Repetir Password:</LabelForm>
              <InputForm 
                name='password_confirmation'  id="password_confirmation" type="password" placeholder="Repetir Password" />

           </div>
           <input type="sumit" value={'Crear Cuenta'} className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold p-3 w-full mt-5 uppercase font-bold cursor-pointer text-center'/>
        </form>

      </SettinsDiv>

          <nav className='mt-5'>
            <Link to="/auth/login">
              ¿Ya tienes una cuenta? Inicia session

            </Link>

          </nav>
    </>
  )
}
