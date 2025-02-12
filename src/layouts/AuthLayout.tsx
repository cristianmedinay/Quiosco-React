import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Main = styled.div`
  max-width: 56rem; 
  margin: 2.5rem auto 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) { 
    margin-top: 7rem; 
    flex-direction: row; 
  }
`;
export const AuthLayout = () => {
  return (
    <div> 
      <Main>
        <img src="../public/img/logo.svg" alt="Logo" style={{ maxWidth: '20rem'}} />
        <div style={{padding:'20px' , width:'100%'}}>
          <Outlet />                  
        </div>
      </Main>
    </div>
  )
}
