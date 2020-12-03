import React from 'react';
import './styles.css';

interface Props {
  gallery: Array<string>;
}

export function Gallery({ gallery }: Props): JSX.Element {
  return (
    <div className='container-gallery'>
      <div className='gallery-item'>
        {gallery.map((value, index) => {
          return (
            <div className='content' key={index}>
              <img src={value} className='image-style' />
            </div>
          );
        })}
      </div>
    </div>
  );
}
