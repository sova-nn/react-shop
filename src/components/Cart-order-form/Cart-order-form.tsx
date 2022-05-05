import React from "react";

import './Cart-order-form.scss';


function CartOrderForm() {
    return (
        <div className="cart-order">
            <form>
                <div className="cart-order-header">Оформление заказа</div>
                <div className="cart-order-field">
                    <label htmlFor="name" />
                    <input type="text" id="name" placeholder="Имя, Фамилия"/>
                </div>
                <div className="cart-order-field">
                    <label htmlFor="phone" />
                    <input type="text" id="phone" placeholder="+7 904 000 80 80"/>
                </div>
                <div className="cart-order-field">
                    <label htmlFor="address" />
                    <input type="text" id="address" placeholder="Адресс доставки"/>
                </div>
                <div className="cart-order-total">
                    Итого: 128 000 руб.
                </div>
                <div className="cart-order-button btn btn-light">
                    <input type="submit" value="Оформить заказ" />
                </div>
            </form>
        </div>
    );
}

export default CartOrderForm;