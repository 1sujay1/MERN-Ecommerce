import React, { Component } from 'react';
import CollectionPreview from '../../components/collection/collection.component';
import SHOP_DATA from './shop.data';
import './shop.style.scss';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop-page" >
                {
                    this.state.collections.map(({ id, ...otherCollectionProp }) => (
                        <CollectionPreview
                            key={id}
                            {...otherCollectionProp}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;