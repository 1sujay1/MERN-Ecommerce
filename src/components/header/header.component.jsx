import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from './../../assets/images/crown.svg';
import './header.style.scss';

const Header = ({ currentUser }) => {
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

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
console.log("mapStateToProps", mapStateToProps);
export default connect(mapStateToProps)(Header);