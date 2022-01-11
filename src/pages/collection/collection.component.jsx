import React from "react";
import './categories.style.scss';
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { withRouter } from "../../utils/router.params";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
    console.log("collection", collection);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItemComponent key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state, { urlParams }) => {
    return ({
        collection: selectCollection(urlParams.collectionId)(state)
    })
}
export default withRouter(connect(mapStateToProps)(CollectionPage));