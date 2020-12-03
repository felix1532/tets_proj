import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import { selectGalleryState } from '../../core/selectors/gallery-selector';
import { selectProfileState } from '../../core/selectors/profile-selector';
import { downloadGalleryPhoto } from '../../core/thunks/gallery';
import {
  downloadPhotoProfile,
  downloadProfile,
} from '../../core/thunks/profile';
import { Gallery } from './components/gallery';
import { defaultHomePage } from './default-state';
import './styles.css';

export function HomePage(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  const stateProfile = useSelector(selectProfileState);
  const stateGallery = useSelector(selectGalleryState);

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [gallery, setGallery] = useState<Array<string>>([]);

  const backgroundImage = {
    backgroundImage: photo
      ? 'url(' + photo + ')'
      : `url(${defaultHomePage.DEFAULT_IMAGE})`,
  };

  useEffect(() => {
    dispatch(downloadGalleryPhoto());
    dispatch(downloadProfile());
    dispatch(downloadPhotoProfile());
  }, [dispatch]);

  useEffect(() => {
    setGallery(stateGallery.gallery);
  }, [stateGallery]);

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
            <div className='property-image' style={backgroundImage}>
              <div className='property-image-title'></div>
            </div>
            <div className='property-description'>
              <h2>{`${name || defaultHomePage.NAME} ${
                surname || defaultHomePage.SURNAME
              }`}</h2>
              <h4>{email || defaultHomePage.EMAIL}</h4>
            </div>
          </div>
        </div>
        <div className='container-gallery'>
          <Gallery gallery={gallery} />
        </div>
      </div>
    </div>
  );
}
