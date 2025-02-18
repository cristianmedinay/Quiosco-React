import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import Modal from 'react-modal'
import { useQuiosco } from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'

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



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
export const Layout = () => {

    const {modal} = useQuiosco();
  
  return (
    <>

      <div className='md:flex'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
          <Outlet />  
        </main>
        <Resumen />


      </div>


      {modal &&
        <Modal
          isOpen={modal}
          
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalProducto />
        </Modal>
      }


    </>
  )
}
