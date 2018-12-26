import React from 'react';
import UploadPhotoForm from './uploadPhotoForm';

import './modelPhotos.scss';

export const ModelPhotos = (props) => {

    const photoCollection = [
        props.model.photo1Url,
        props.model.photo2Url,
        props.model.photo3Url,
        props.model.photo4Url,
    ];

    const photoList = photoCollection.map((photo, index) =>
        <div className='modelThumbnail' key={index}>
            <img className='modelThumbnailImg' alt={props.model.title} src={photo} />
            <div className='modelThumbnailOverlay'>
                {props.loggedIn
                    ? <UploadPhotoForm photoKey={'photo' + (index + 1) + 'Url'} />
                    : null
                }</div>
        </div>
    )

    return (
        <section>
            <h1 className='modelTitle'>{props.model.title || 'New Model'}</h1>
            <div className='modelThumbnails'>
                {photoList}
            </div>
        </section>
    );
}

export default ModelPhotos;