import React, { useCallback, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  profileLoadRequestAction,
  requestDownloadPhotoAction,
  requestUpdateNameProfile,
  requestUpdateSurnameProfile,
  requestUploadPhotoAction,
} from '../../core/actions/profile';
import { Loading } from '../../core/components/loading/loading';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import { readAsDataUrl } from '../../core/helpers/read-as-data-url';
import { selectProfileState } from '../../core/selectors/profile';
import './styles.css';

export const ProfilePage = React.memo(function ProfilePage(): JSX.Element {
  const alert = useAlert();
  const dispatch = useDispatch();
  const stateProfile = useSelector(selectProfileState);
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [loadingProfile, setLoadingProfile] = useState<boolean>(true);

  useEffect(() => {
    dispatch(profileLoadRequestAction());
    dispatch(requestDownloadPhotoAction());
  }, [dispatch]);

  useEffect(() => {
    setName(stateProfile.user.name);
    setSurname(stateProfile.user.surname);
    setEmail(stateProfile.user.email);
    setPhoto(stateProfile.avatarUrl);
    setLoadingProfile(stateProfile.fieldsLoading || stateProfile.photoLoading);
  }, [stateProfile]);

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

  const handlePhotoUpdate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      readAsDataUrl(event, alert, setImage);
    },
    []
  );

  const updateProfileHandler = useCallback(() => {
    const { user } = stateProfile;
    if (user.name !== name) {
      dispatch(requestUpdateNameProfile({ name, history, alert }));
    }
    if (user.surname !== surname) {
      dispatch(requestUpdateSurnameProfile({ surname, history, alert }));
    }
    if (image) {
      dispatch(requestUploadPhotoAction({ image, history, alert }));
    }
  }, [name, surname, email, image, dispatch, history]);

  return (
    <div>
      <TopBarNavigation />
      {loadingProfile ? (
        <Loading color='#fff' size='large' />
      ) : (
        <div className='profile-container'>
          <div className='profile-page'>
            <div className='image-cont'>
              <img
                src={
                  image ||
                  photo ||
                  'https://www.pngfind.com/pngs/m/292-2924933_image-result-for-png-file-user-icon-black.png'
                }
                alt='Avatar'
                className='avatar'
              />

              <div className='example-2'>
                <div className='form-group'>
                  <input
                    type='file'
                    accept='image/jpeg,image/png,image/gif'
                    name='file'
                    id='file'
                    className='input-file'
                    onChange={handlePhotoUpdate}
                  />
                  <label
                    htmlFor='file'
                    className='btn btn-tertiary js-label-file'
                  >
                    <i className='icon fa fa-check'></i>
                    <span className='js-file-name'>Upload photo</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='container-profile-form'>
              <form className='input-form-profile' onSubmit={submitHandler}>
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
                  disabled
                />
                <button
                  type='submit'
                  className='submit-button'
                  onClick={updateProfileHandler}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
