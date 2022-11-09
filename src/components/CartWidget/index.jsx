import React from "react";
import '../CartWidget/CartWidget.css'
import {NavLink} from 'react-router-dom';

function CartWidget() {
    return (
        <NavLink className="CartWidget" to='/Cart'>
        <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
    )
}

export default CartWidget;