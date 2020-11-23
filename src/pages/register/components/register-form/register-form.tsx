import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../../../core/thunks/auth';
import './styles.css';

export const RegisterForm = React.memo(function RegisterForm(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [differentPassword, setDifferentPassword] = useState<boolean>(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const changeInputName = useCallback(({ target: { value } }) => {
    setName(value);
  }, []);

  const changeInputSurname = useCallback(({ target: { value } }) => {
    setSurname(value);
  }, []);

  const changeInputEmail = useCallback(({ target: { value } }) => {
    setEmail(value);
  }, []);

  const changeInputPassword = useCallback(({ target: { value } }) => {
    setPassword(value);
  }, []);

  const changeInputRepeatPassword = useCallback(({ target: { value } }) => {
    setRepeatPassword(value);
    if (password === repeatPassword) setDifferentPassword(false);
  }, []);

  const registerHandler = useCallback(() => {
    if (password !== repeatPassword) {
      setDifferentPassword(true);
    } else {
      dispatch(register(name, surname, email, password, history));
    }
  }, [name, surname, email, password, repeatPassword, dispatch, history]);

  return (
    <div className='container-register-form'>
      <form className='input-form-register' onSubmit={submitHandler}>
        <input
          type='text'
          className='input-field '
          placeholder='Name...'
          value={name}
          onChange={changeInputName}
          required
        />
        <input
          type='text'
          className='input-field'
          placeholder='Surname...'
          value={surname}
          onChange={changeInputSurname}
          required
        />
        <input
          type='text'
          className='input-field '
          placeholder='Login...'
          value={email}
          onChange={changeInputEmail}
          required
        />
        <input
          type='password'
          className='input-field '
          placeholder='Password...'
          value={password}
          onChange={changeInputPassword}
          required
        />
        <input
          type='password'
          className={
            differentPassword
              ? ' input-field form-control is-invalid '
              : 'input-field '
          }
          placeholder='Repeat password...'
          value={repeatPassword}
          onChange={changeInputRepeatPassword}
          required
        />
        <button
          type='submit'
          className='submit-button'
          onClick={registerHandler}
        >
          Register
        </button>
      </form>
    </div>
  );
});
