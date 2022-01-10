import React from 'react';

import './cart-icon.style.scss';

import { ReactComponent as ShoppingIcon } from './../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((qty, item) => qty + item.quantity, 0)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);