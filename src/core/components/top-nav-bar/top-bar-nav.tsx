import React, { useCallback } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signOut } from '../../thunks/auth';
import './styles.css';

export default function TopBarNavigation(): JSX.Element {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    dispatch(signOut(history, alert));
  }, [dispatch, history]);

  return (
    <div className='top-nav'>
      <div className='ling-container'>
        <Link to='/home'>Home</Link>
        <Link to='/editor'>Editor</Link>
        <Link to='/profile'>Profile</Link>
      </div>
      <div className='button-container'>
        <button
          type='button'
          className='btn btn-success'
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
