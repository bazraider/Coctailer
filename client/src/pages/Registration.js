import React, {useState} from 'react';
import {useHttp} from '../hooks/http.hook'

const Registration = () => {
  const {loading, request} = useHttp();
  
  const [form, setForm] = useState({name: '', email: '', password: ''})

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/register', 'POST', { ...form })
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
        <small id="passwordHelpBlock" class="form-text text-muted mb-4" >
          Длина пароля должна быть не менее 6 символов.
        </small>

      <button 
        type="button" 
        className="btn btn-light btn-lg" 
        id="shadowtest"
        onClick={registerHandler}
        disabled={loading}
        >
        Зарегистрироваться
        </button>

    </div>
  )
}

export {Registration}
