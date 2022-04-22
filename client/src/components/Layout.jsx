import React from 'react';
import { Outlet, } from 'react-router-dom';
import { Navbar } from './Navbar'


const Layout = () => {

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
