import React from 'react';
import Loadable from 'react-loading-overlay';
import './loading.scss';

export const Loading = (props) => {
    return (
        <div className='loadingContainer'>
            <Loadable
                active={true}
                spinner={true}
                animate={true}
                color={'white'}
                text={props.message}
            >
            </Loadable >
        </div>
    )
}

export default Loading;