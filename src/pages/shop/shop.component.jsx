import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { convertCollectionsSnapshotToMap, firestore, getCollectionsRef } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';
import './shop.style.scss';

class ShopPage extends React.Component {
    unSubscribeFromSnapshot = null;

    async componentDidMount() {
        let collectionRef = await getCollectionsRef('collections');
        let collectionData = await convertCollectionsSnapshotToMap(collectionRef);
        this.props.updateCollections(collectionData)
    }
    render() {
        return (
            <div className="shop-page">
                <Routes>
                    <Route path='/' element={this.props.collections ? <CollectionOverview /> : <h1>Loading</h1>} />
                    <Route path=':collectionId' element={this.props.collections ? <CollectionPage /> : <h1>Loading</h1>} />
                </Routes>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})
const mapStateToProps = ({ shop }) => ({
    collections: shop.collections
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);