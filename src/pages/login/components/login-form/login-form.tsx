import React, { useState } from 'react';
import { useCallback } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { signingInAction } from '../../../../core/actions/auth';

export const LoginForm = React.memo(function LoginForm(): JSX.Element {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const logInHandler = useCallback(() => {
    dispatch(signingInAction({ login, password, history, alert }));
  }, [login, password, history, dispatch]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogin('');
    setPassword('');
  };

  const changeInputLogin = useCallback(({ target: { value } }) => {
    setLogin(value);
  }, []);

  const changeInputPassword = useCallback(({ target: { value } }) => {
    return setPassword(value);
  }, []);

  return (
    <div className='container-login-form'>
      <form className='input-form-login' onSubmit={submitHandler}>
        <input
          type='text'
          className='input-field'
          placeholder='Login...'
          value={login}
          name='login'
          onChange={changeInputLogin}
          required
        />
        <input
          type='password'
          className='input-field'
          placeholder='Password...'
          value={password}
          name='password'
          onChange={changeInputPassword}
          required
        />
        <button type='submit' className='submit-button' onClick={logInHandler}>
          Log In
        </button>
      </form>
    </div>
  );
});
