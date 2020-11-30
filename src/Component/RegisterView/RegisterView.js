import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Auth/authOperations';
import './RegisterView.css'


const RegisterView = () => {
  const regState = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch()

  const [regForm, setRegForm] = useState(regState)

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setRegForm(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register(regForm));
    setRegForm(RegisterView);
  };

  const { name, email, password } = regForm;

  return (
    <div className='RegisterView'>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit}>
        <label className='RegisterView-label'>
          Name:
            <input className='RegisterView-input-name'
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className='RegisterView-label'>
          Email:
            <input className='RegisterView-input-email'
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className='RegisterView-label'>
          Password:
            <input className='RegisterView-input-password'
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className='RegisterView-btn' type="submit">Registration</button>
      </form>
    </div>
  );

}


export default RegisterView;