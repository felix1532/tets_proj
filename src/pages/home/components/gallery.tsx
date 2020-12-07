import React from 'react';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ListPhotos } from '../../../core/interfaces/listPhotos';
import { deletePhotoGallery } from '../../../core/thunks/gallery';
import './styles.css';

interface Props {
  gallery: Array<ListPhotos>;
}

export function Gallery({ gallery }: Props): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleEditPhoto = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const srcPhoto = event.currentTarget.parentNode.lastElementChild.lastElementChild.getAttribute(
      'src'
    );
    const indexListPhoto = gallery.findIndex(
      (item: ListPhotos) => item.photo === srcPhoto
    );

    history.push('/editor', gallery[indexListPhoto]);
  };

  const handleDeletePhoto = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const srcPhoto = event.currentTarget.parentNode.lastElementChild.lastElementChild.getAttribute(
      'src'
    );
    const indexListPhoto = gallery.findIndex(
      (item: ListPhotos) => item.photo === srcPhoto
    );
    dispatch(deletePhotoGallery(gallery[indexListPhoto].fullPath, alert));
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
                  <a className='edit' onClick={handleEditPhoto}>
                    Edit
                  </a>
                  <a className='delete' onClick={handleDeletePhoto}>
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
