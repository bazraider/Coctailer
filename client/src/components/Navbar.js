import React, {useContext} from 'react';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const Navbar = () => {
  const navigate = useNavigate()
  const login = useContext(LoginContext)

  const logoutHandler = event => {
    event.preventDefault()
    login.logout()
    navigate("/")
  }
  if (login.isAuthenticated) {
    return (
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/find">Find Coctail</NavLink>
        <NavLink to="/random">Random Coctail</NavLink>
        <NavLink to="/user/:id">User room</NavLink>
        <Link to="/" 
          onClick={logoutHandler}
          >
          Logout
          </Link>
      </header>
    )
  } else {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/find">Find Coctail</NavLink>
      <NavLink to="/random">Random Coctail</NavLink>
      <NavLink to="/user/:id">User room</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </header>
  )
}
}

export {Navbar}
