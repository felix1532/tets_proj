import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import { selectProfileState } from '../../core/selectors/profile-selector';
import {
  downloadPhotoProfile,
  downloadProfile,
} from '../../core/thunks/profile';
import { defaultHomePage } from './default-state';
import './styles.css';

export const HomePage = React.memo(function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const stateProfile = useSelector(selectProfileState);
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
    setName(stateProfile.user.name);
    setSurname(stateProfile.user.surname);
    setEmail(stateProfile.user.email);
    setPhoto(stateProfile.avatarUrl);
  }, [stateProfile]);

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
                  : `url(${defaultHomePage.DEFAULT_IMAGE})`,
              }}
            >
              <div className='property-image-title'></div>
            </div>
            <div className='property-description'>
              <h2>{`${name || defaultHomePage.NAME} ${
                surname || defaultHomePage.SURNAME
              }`}</h2>
              <h4>{email || defaultHomePage.EMAIL}</h4>
            </div>
            <a href='#'>
              <div className='property-social-icons'></div>
            </a>
          </div>
        </div>
        <div className='library-container'>Library </div>
      </div>
    </div>
  );
});
