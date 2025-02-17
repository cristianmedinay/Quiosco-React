import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

/* const Main = styled.div`
  max-width: 56rem; 
  margin: 2.5rem auto 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) { 
    margin-top: 7rem; 
    flex-direction: row; 
  }
`; */





export const Layout = () => {
  return (
    <>

      <div className='md:flex'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
          <Outlet />  
        </main>
        <Resumen />
      </div>
      {/* <Main>

        <img src="../public/img/logo.svg" alt="Logo" />

        <div>
          <Outlet />        
          
        </div>
      </Main> */}
    </>
  )
}
