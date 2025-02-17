import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './context/QuioscoProvider.tsx'
import routers from './router/routers.tsx'
import '../styles.css'



createRoot(document.getElementById('root')!).render(

    <>
      <QuioscoProvider>
        <RouterProvider router={routers} />
      
      </QuioscoProvider>    
    </>
)
