import React from 'react';
import Header from "../../components/Header/Header";
import CartListing from "../../components/Cart-listing/Cart-listing";
import CartOrderForm from "../../components/Cart-order-form/Cart-order-form";

import "./Cart.scss";

function Cart() {
    return (
        <div className="cart-wrapper">
            <Header />
            <div className="cart-main">
                <CartListing />
                <div className="cart-order-form">
                    <CartOrderForm />
                </div>
            </div>
        </div>
    );
}

export default Cart;