import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import {useHttp} from '../hooks/http.hook'

const Login = () => {
  const login = useContext(LoginContext);
  const {loading, request, error} = useHttp();
 
  const [form, setForm] = useState({email: '', password: ''})

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('http://localhost:4000/login', 'POST', { ...form })
      login.login(data.token, data.userId);
    } catch (error) {
      console.log(error)
    }
  }

  const navigate = useNavigate();

  return (
    <div className="container col-8 bg-blue border bg-light" id='registerField'>

      <div className="form-floating mb-4 mx-5" id="shadowtest">
        <input 
          type="email" 
          name="email"
          className="form-control" 
          id="floatingInput" 
          placeholder="name@example.ru"
          onChange={changeHandler}
        />
        <label htmlFor="floatingInput">Введите E-mail</label>
      </div>

      <div className="form-floating mb-4 mx-5" id="shadowtest">
        <input 
          type="password"
          name="password"
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password"
          onChange={changeHandler}
        />
        <label htmlFor="floatingPassword">Введите пароль</label>
      </div>

      {error && 
      <div className="alert alert-warning" role="alert">
        <ul>
          {error.message}
          {error.errors && <li>{error.errors[0].msg}</li>}
        </ul>
      </div>}

      <button 
        type="button" 
        className="btn btn-light btn-lg" 
        id="shadowtest"
        // onClick={loginHandler}
        onClick={() => {loginHandler(); navigate('/')}}
        disabled={loading}
        >
        Войти
        </button>

    </div>
  )
}

export {Login}
