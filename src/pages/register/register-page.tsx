import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterForm } from './components/register-form/register-form';
import './styles.css';

export const RegisterPage = React.memo(function RegisterPage(): JSX.Element {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push('/');
  };

  return (
    <div className='register-page'>
      <div className='container-button'>
        <div id='btn-register'></div>
        <button
          type='button'
          className='toggle-button'
          onClick={handleClickLogin}
        >
          LogIn
        </button>
        <button type='button' className='toggle-button'>
          Register
        </button>
      </div>
      <RegisterForm />
    </div>
  );
});
