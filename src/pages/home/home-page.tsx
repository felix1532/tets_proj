import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../core/components/loading/loading';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import { ListPhotos } from '../../core/interfaces/list-photos';
import { selectGalleryState } from '../../core/selectors/gallery';
import { selectProfileState } from '../../core/selectors/profile';
import { downloadGalleryPhoto } from '../../core/thunks/gallery';
import {
  downloadPhotoProfile,
  downloadProfile,
} from '../../core/thunks/profile';
import { Gallery } from './components/gallery';
import './styles.css';

export const HomePage = React.memo(function HomePage(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  const stateProfile = useSelector(selectProfileState);
  const stateGallery = useSelector(selectGalleryState);

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [gallery, setGallery] = useState<Array<ListPhotos>>([]);
  const [loadingProfile, setLoadingProfile] = useState<boolean>(true);
  const [loadingGallery, setLoadingGallery] = useState<boolean>(true);

  const backgroundImage = {
    backgroundImage: photo
      ? 'url(' + photo + ')'
      : `url(https://www.pngfind.com/pngs/m/292-2924933_image-result-for-png-file-user-icon-black.png)`,
  };

  useEffect(() => {
    dispatch(downloadGalleryPhoto());
    dispatch(downloadProfile());
    dispatch(downloadPhotoProfile());
  }, [dispatch]);

  useEffect(() => {
    setGallery(stateGallery.gallery);
    setLoadingGallery(stateGallery.isLoading);
  }, [stateGallery]);

  useEffect(() => {
    setName(stateProfile.user.name);
    setSurname(stateProfile.user.surname);
    setEmail(stateProfile.user.email);
    setPhoto(stateProfile.avatarUrl);
    setLoadingProfile(stateProfile.fieldsLoading || stateProfile.photoLoading);
  }, [stateProfile]);

  const handleClickCard = () => {
    history.push('/profile');
  };
  return (
    <div>
      <TopBarNavigation />
      {loadingGallery || loadingProfile ? (
        <Loading size='large' color='#fff' />
      ) : (
        <div className='container-home-page'>
          <div className='center'>
            <div className='property-card' onClick={handleClickCard}>
              <div className='property-image' style={backgroundImage}>
                <div className='property-image-title'></div>
              </div>
              <div className='property-description'>
                <h2>{`${name || 'name'} ${surname || 'surname'}`}</h2>
                <h4>{email || 'email'}</h4>
              </div>
            </div>
          </div>
          <Gallery gallery={gallery} />
        </div>
      )}
    </div>
  );
});
