import React from 'react'
import { Categoria as CategoriaProps} from '../interfaces/interfaces'
import { useQuiosco } from '../hooks/useQuiosco'
const Categoria = ( categoria: CategoriaProps) => {


  const {handleClickCategoria, categoriaActual} = useQuiosco()
  const {icono, id, nombre} = categoria;

  const resaltarCategoriaActual = () => {
      return categoriaActual?.id === id ? 'bg-amber-400' : 'bg-white';
  }

  return (
    <div key={id} className={`${resaltarCategoriaActual()}  flex items-center gap-4 border-0 w-full p-3 shadow hover:bg-amber-400 cursor-pointer`} >
        <img src={`../public/img/icono_${icono}`+'.svg'} alt={`${nombre}`} className='w-12'  />
    
        <button className='text-2xl font-bold text-center' type='button' onClick={() => handleClickCategoria(id)}>{nombre}</button>
    </div>
  )
}

export default Categoria