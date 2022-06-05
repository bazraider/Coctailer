import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook'

const Registration = () => {
  const {loading, request, error, clearError} = useHttp();
  const [successReg, setSuccesReg] = useState('');
  const clearSuccesReg = () => setSuccesReg(null)
  const [form, setForm] = useState({name: '', email: '', password: ''})

  
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    clearSuccesReg()
    clearError()
  }

  const registerHandler = async () => {
    try {
      const data = await request('http://localhost:4000/register', 'POST', { ...form })
      setSuccesReg(data.message)
    } catch (error) {

      }
  }
  
  return (
    <div className="container col-8 bg-blue border bg-light" id='registerField'>
      
      <div className="form-floating mb-4 mx-5" id="shadowtest">
        <input 
          type="name"
          name="name" 
          className="form-control" 
          id="floatingInput" 
          placeholder="Name"
          onChange={changeHandler}
        />
        <label htmlFor="floatingInput">Введите имя</label>
      </div>

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

      <div className="form-floating mx-5" id="shadowtest">
        <input 
          type="password"
          name="password" 
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password"
          aria-describedby="passwordHelpInline"
          onChange={changeHandler}
        />
        <label htmlFor="floatingPassword">Введите пароль</label>
      </div>
        <small id="passwordHelpBlock" className="form-text text-muted mb-4" >
          Длина пароля должна быть не менее 6 символов.
        </small>
     
        {error && 
      <div className="alert alert-warning" role="alert">
        <ul>
          {error.message + ":"}
          {error.errors[0] && <li>{error.errors[0].msg}</li>}
          {error.errors[1] && <li>{error.errors[1].msg}</li>}
        </ul>
      </div>}

      {successReg && 
      <div className="alert alert-success" role="alert">
        {successReg}<br />
        <p>Пожалуйста <a href="#">авторизуйтесь</a></p>
      </div>}

      <button 
        type="button" 
        className="btn btn-light btn-lg" 
        id="shadowtest"
        onClick={registerHandler}
        // Для отработки ошибок временно отключу редирект
        // onClick={() => {registerHandler(); navigate('/login')}}
        disabled={loading}
        >
        Зарегистрироваться
      </button>

    </div>
  )
}

export {Registration}
