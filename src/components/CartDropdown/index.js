import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import {} from '../..'
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/selector";
import {toggleCartHidden} from '../../redux/cart/actions'

import "./styles.scss";

const CartDropdown = ({ cartItems , history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length?
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )):
                <span className='empty-message'>Your cart is empty</span>}
            </div>
            <CustomButton onClick={()=> 
                {history.push('/checkout')
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown))