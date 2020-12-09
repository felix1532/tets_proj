import React from 'react';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePhotoGallery } from '../../../core/thunks/gallery';
import './styles.css';
import { Props } from './types';

export function Gallery({ gallery }: Props): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleEditPhoto = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    history.push('/editor', gallery[+event.currentTarget.id]);
  };

  const handleDeletePhoto = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    dispatch(
      deletePhotoGallery(gallery[+event.currentTarget.id].fullPath, alert)
    );
  };

  const addPhotoHandler = () => {
    history.push('/editor');
  };

  return (
    <div className='container-gallery'>
      {gallery.length !== 0 ? (
        <div className='child-page-listing'>
          <div className='grid-container'>
            {gallery.map((photoSrc, index) => {
              return (
                <article className='location-listing' key={index}>
                  <a className='edit' onClick={handleEditPhoto} id={`${index}`}>
                    Edit
                  </a>
                  <a
                    className='delete'
                    onClick={handleDeletePhoto}
                    id={`${index}`}
                  >
                    Delete
                  </a>
                  <div className='location-image'>
                    <img className='photo-gallery' src={photoSrc.photo} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='no-photo-container' onClick={addPhotoHandler}>
          <p className='no-photo-text'>You have no photo at the moment...</p>
          <button className='btn btn-primary add-button'>Add photo</button>
        </div>
      )}
    </div>
  );
}
