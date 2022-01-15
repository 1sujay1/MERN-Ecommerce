import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import Loader from '../../components/loader/loader.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';
import './shop.style.scss';

const ShopPage = ({ fetchCollectionsStarts, isCollectionFetching, isCollectionLoaded }) => {

    useEffect(() => {
        fetchCollectionsStarts()

        //Methadology of using componentWillUnmount
        // return () => {
        //     console.log("hello");
        // }
    }, [fetchCollectionsStarts])

    return (
        <div className="shop-page" >
            <Routes>
                <Route path='/' element={!isCollectionFetching ? <CollectionOverview /> : <Loader />} />
                <Route path=':collectionId' element={isCollectionLoaded ? <CollectionPage /> : <Loader />} />
            </Routes>
        </div>
    )

}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStarts: () => dispatch(fetchCollectionsStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);