import React from 'react';
import { Link } from 'react-router-dom';
import './modelList.scss';

export const ModelList = (props) => {

    const models = props.models.map((model) =>
        <div className='modelListThumbnail' key={model._id}>
            <Link to={'/model/' + model._id} key={model._id}>
                <img className='modelListThumbnailImg' alt={model.title} src={model.photo1Url} />
                <div className='modelListThumbnailOverlay'></div>
                <div className='modelListTitle'>
                    <h2 className='truncated'>{model.title}</h2>
                </div>
                <div className='modelListBrand'>
                    <h2>{model.modelMfg}</h2>
                </div>
                <div className='modelListScale'>
                    <h2>{model.scale}</h2>
                </div>
            </Link>
        </div>
    );

    return (
        <section className='modelListThumbnails'>
            {models}
        </section>
    )
}

export default ModelList;