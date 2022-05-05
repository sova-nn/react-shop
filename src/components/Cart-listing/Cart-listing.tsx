import React from 'react';

import './Cart-listing.scss';
import CartItem from "../Cart-item/Cart-item";
import CartButton from "../Cart-button/Cart-button";
import {mockItems} from "../../mocks/items";

function CartListing() {
    // пока на моках, взяты первые два элемента для соответствия макету
    const mockItemsListing = mockItems.slice(0, 2);

    return (
        <div className="cart-listing">
            <div className="cart-listing-header">
                <div>Товар</div>
                <div>К-во</div>
            </div>
            {
                mockItemsListing.map((mockItem, key: number) =>
                    <div>
                        <hr />
                        <CartItem counter item={mockItem} key={key}/>
                    </div>
                )
            }
            <div className="cart-listing-buttons">
                <CartButton name="Очистить корзину" />
                <CartButton name="Продолжить покупки" dark />
            </div>
        </div>
    );

}


export default CartListing;