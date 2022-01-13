import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from './../../assets/images/crown.svg';
// import './header.style.scss';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.style.jsx';
const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to='/'>
                    HOME
                </OptionLink>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                {currentUser
                    ? <OptionLink as='div' onClick={() => auth.signOut()} >SIGNOUT</OptionLink>
                    : <OptionLink to='/signin'>
                        SIGNIN
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}

        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);