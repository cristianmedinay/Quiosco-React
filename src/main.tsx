import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './router/routers.tsx'
import '../styles.css'

import Inicio from './views/Inicio.tsx'

createRoot(document.getElementById('root')!).render(

    <>
      <RouterProvider router={routers} />
      <Inicio />
    
    </>
)
