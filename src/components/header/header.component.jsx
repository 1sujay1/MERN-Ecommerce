import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from './../../assets/images/crown.svg';
import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options" >
                <Link className="option" to='/'>
                    HOME
                </Link>
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                {currentUser
                    ? <div className="option" onClick={() => auth.signOut()} >SIGNOUT</div>
                    : <Link className="option" to='/signin'>
                        SIGNIN
                    </Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}

        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);