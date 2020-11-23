import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import { selectProfileState } from '../../core/selectors/profile-selector';
import {
  downloadPhotoProfile,
  downloadProfile,
} from '../../core/thunks/profile';
import './styles.css';

export default function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector(selectProfileState);
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');

  useEffect(() => {
    dispatch(downloadProfile());
    dispatch(downloadPhotoProfile());
  }, [dispatch]);

  useEffect(() => {
    setName(state.user.name);
    setSurname(state.user.surname);
    setEmail(state.user.email);
    setPhoto(state.avatarUrl);
  }, [state]);

  const handleClickCard = () => {
    history.push('/profile');
  };
  return (
    <div>
      <TopBarNavigation />
      <div className='container-home-page'>
        <div className='center'>
          <div className='property-card' onClick={handleClickCard}>
            <div
              className='property-image'
              style={{
                backgroundImage: photo
                  ? 'url(' + photo + ')'
                  : 'url(https://www.pngfind.com/pngs/m/292-2924933_image-result-for-png-file-user-icon-black.png)',
              }}
            >
              <div className='property-image-title'></div>
            </div>
            <div className='property-description'>
              <h2>
                {' '}
                {name || 'Name'} {surname || 'Surname'}
              </h2>
              <h4>{email || 'email'}</h4>
            </div>
            <a href='#'>
              <div className='property-social-icons'></div>
            </a>
          </div>
        </div>
        <div className='library_container'>Library </div>
      </div>
    </div>
  );
}
