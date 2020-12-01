import React, { useCallback, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import { selectProfileState } from '../../core/selectors/profile-selector';
import {
  downloadPhotoProfile,
  downloadProfile,
  updateNameProfile,
  updateSurnameProfile,
  uploadPhotoProfile,
} from '../../core/thunks/profile';
import { defaultProfilePage } from './default-state';
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

  const handlePhotoUpdate = useCallback((event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
        alert.success('Photo success download', {
          timeout: 2000,
        });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }, []);

  const updateProfileHandler = useCallback(() => {
    if (stateProfile.user.name !== name) {
      dispatch(updateNameProfile(name, history, alert));
    }
    if (stateProfile.user.surname !== surname) {
      dispatch(updateSurnameProfile(surname, history, alert));
    }
    if (image) {
      dispatch(uploadPhotoProfile(image, history, alert));
    }
  }, [name, surname, email, image, dispatch, history]);

  return (
    <div>
      <TopBarNavigation />
      <div className='profile-container'>
        <div className='profile-page'>
          <div className='image-cont'>
            <img
              src={image || photo || defaultProfilePage.DEFAULT_IMAGE}
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
    </div>
  );
});
