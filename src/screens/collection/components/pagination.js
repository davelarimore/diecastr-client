import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { getPublicCollectionModels } from '../../../modules/collection';
// import { getCollectionModels } from '../../../modules/collection';
import colors from '../../../common/colors';
import { getRangeWithDots } from '../../../utils/helpers'

const styles = {
    ul: {
        color: colors.accentColor,
        listStyle: 'none',
        padding: '0',
        margin: '15px 0 30px 0',
    },
    li: {
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        margin: '0 10px',
        ':hover': {
            color: colors.brandColor
        }
    },
    liActive: {
        color: colors.brandColor,
        fontWeight: 700,
        display: 'inline-block',
        position: 'relative',
        margin: '0 10px',
    },
}

export const Pagination = ({
    getPage,
    currentPage,
    pageTotal,
    collectionId
}) => {

    const pages = getRangeWithDots(currentPage, pageTotal).map(pageNumber => {
        if (pageNumber !== '...' && pageNumber === currentPage) {
            return <li style={styles.liActive} key={pageNumber}>{pageNumber}</li>
        } else if (pageNumber !== '...') {
            return <li style={styles.li} key={pageNumber} onClick={() => getPage(collectionId, pageNumber)}>{pageNumber}</li >
        } else {
            return pageNumber;
        }
    });

    const previous =
        <li style={styles.li} key='prev' onClick={() => getPage(collectionId, currentPage - 1)}>&laquo; Previous</li>

    const next =
        <li style={styles.li} key='next' onClick={() => getPage(collectionId, currentPage + 1)}>Next &raquo;</li>

    return (
        <React.Fragment>
            <ul style={styles.ul}>
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
    // getPage: page => dispatch(getCollectionModels(page)),
    getPage: (collectionId, page) => dispatch(getPublicCollectionModels(collectionId, page)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Pagination))