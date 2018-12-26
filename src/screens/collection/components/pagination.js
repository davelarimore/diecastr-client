import React from 'react';
import { connect } from 'react-redux';
import { getPublicCollectionModels } from '../../../modules/collection';
import { getRangeWithDots } from '../../../utils/helpers'
import './pagination.scss';

export const Pagination = ({
    getPage,
    currentPage,
    pageTotal,
    collectionId
}) => {

    const pages = getRangeWithDots(currentPage, pageTotal).map(pageNumber => {
        if (pageNumber !== '...' && pageNumber === currentPage) {
            return <li className='active' key={pageNumber}>{pageNumber}</li>
        } else if (pageNumber !== '...') {
            return <li  key={pageNumber} onClick={() => getPage(collectionId, pageNumber)}>{pageNumber}</li >
        } else {
            return pageNumber;
        }
    });

    const previous =
        <li key='prev' onClick={() => getPage(collectionId, currentPage - 1)}>&laquo; Previous</li>

    const next =
        <li key='next' onClick={() => getPage(collectionId, currentPage + 1)}>Next &raquo;</li>

    return (
        <React.Fragment>
            <ul className='pagination'>
                {currentPage === 1 ? null : previous}
                {pageTotal === 1 ? null : pages}
                {currentPage === pageTotal ? null : next}
            </ul>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    currentPage: state.collection.currentPage,
    pageTotal: state.collection.pageTotal,
    collectionId: state.collection._id,
})

const mapDispatchToProps = dispatch => ({
    getPage: (collectionId, page) => dispatch(getPublicCollectionModels(collectionId, page)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)