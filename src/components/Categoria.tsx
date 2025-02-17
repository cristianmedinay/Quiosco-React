import React from 'react'
interface SidebarProps {
    id: number,
    icono: string,
    nombre: string
}
const Categoria = ( categoria: SidebarProps) => {
  return (
    <div key={categoria.id} className='flex items-center gap-4 border-0 w-full p-3 shadow hover:bg-amber-400 cursor-pointer'>
        <img src={`../public/img/icono_${categoria.icono}`+'.svg'} alt='Imagen Icono' className='w-12'  />
    
        <p className='text-2xl font-bold text-center'>{categoria.icono}</p>
    </div>
  )
}

export default Categoria