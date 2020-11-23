import React from 'react';
import './styles.css';
import LoginForm from './components/login-form/login-form';
import { useHistory } from 'react-router-dom';

export default function LoginPage(): JSX.Element {
  const history = useHistory();

  const handleClickRegister = () => {
    history.push('/register');
  };

  return (
    <div className='login-page'>
      <div className='container-button'>
        <div id='btn-login'></div>
        <button type='button' className='toggle-button'>
          LogIn
        </button>
        <button
          type='button'
          className='toggle-button'
          onClick={handleClickRegister}
        >
          Register
        </button>
      </div>
      <LoginForm />
    </div>
  );
}
