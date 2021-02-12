import "./styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.util";
import {createStructuredSelector }  from 'reselect'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {selectCartHidden} from '../../redux/cart/selector'
import {selectCurrentUser} from '../../redux/user/selector'

import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

const Header = ({ currentUser , hidden}) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" to="/" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
