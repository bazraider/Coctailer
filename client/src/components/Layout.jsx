import React, { useContext } from 'react';
import { Outlet, } from 'react-router-dom';
import { useLogin } from '../hooks/login.hook';
import {Navbar} from './Navbar'
import { LoginContext } from '../context/LoginContext'


const Layout = () => {
  const {token, login, logout, userId} = useLogin();
  const isAuthenticated = !!token
  const navbar = Navbar()

  return (
    <>
    {navbar}
    <main className='container'>
      <Outlet />
    </main>
    <footer>
      2022
    </footer>
    </>
  )
}

export {Layout}
