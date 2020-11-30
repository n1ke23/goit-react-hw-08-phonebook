import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Auth/authOperations';
import './LoginView.css';
const LoginView = () => {
  const logState = {
    email: '',
    password: '',
  };

  const [logForm, setLogForm] = useState(logState)
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setLogForm(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn(logForm));
    setLogForm(logState);
  };


  const { email, password } = logForm;

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit}
        className='LoginView-form'>
        <label className='LoginView-label'>
          Email:
            <input className='LoginView-input-email'
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className='LoginView-label'>
          Password:
            <input className='LoginView-input-password'
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className='LoginView-btn' type="submit">Login</button>
      </form>
    </div >
  );

}

export default LoginView;