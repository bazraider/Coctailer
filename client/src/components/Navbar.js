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
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/find">Найти коктейль</NavLink>
        <NavLink to="/random">Случайный коктейль</NavLink>
        <NavLink to="/user/:id">Личный кабинет</NavLink>
        <Link to="/" 
          onClick={logoutHandler}
          >
          Выйти
          </Link>
      </header>
    )
  } else {
  return (
    <header>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/find">Найти коктейль</NavLink>
      <NavLink to="/random">Случайный коктейль</NavLink>
      {/* <NavLink to="/user/:id">Личный кабинет</NavLink> */}
      <NavLink to="/login">Войти</NavLink>
      <NavLink to="/register">Зарегистрироваться</NavLink>
    </header>
  )
}
}

export {Navbar}
