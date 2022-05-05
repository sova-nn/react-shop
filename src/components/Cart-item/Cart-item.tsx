import React, {useState} from "react";

import './Cart-item.scss';
import {useWindowSize} from "../../utils/useWindowSize";

const MOBILE_SIZE = 576;

function CartItem(props: any) {
    const [width] = useWindowSize();
    const { item, popup } = props;
    const maxCount = 10
    const minCount = 1

    const [count, setCount] = useState(1)

    const handleCount = (e: any) => {
        if (e > maxCount) {
            setCount(maxCount)
        } else if (e < minCount) {
            setCount(minCount)
        } else setCount(e)
    }

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                {
                    width > MOBILE_SIZE
                    ? <div className={popup ? "cart-item-popup-picture" : "cart-item-picture"}>
                        <img src={item.image} alt=""/>
                    </div> : null
                }

                <div className="cart-item-main">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-description">{item.description}</div>
                    <div className="cart-item-price">{item.price} Руб.</div>
                    <div className="cart-item-buttons-block">
                        <a className="cart-button">Избранные</a>
                        <a className="cart-button">Удалить</a>
                    </div>
                </div>
                {
                    props.counter
                    && <div className="cart-item-count">
                        <input
                            type="number"
                            value={count}
                            min={minCount}
                            max={maxCount}
                            onChange={(event) => {
                                handleCount(event.target.value)
                            }}
                        />
                    </div>
                }

            </div>
        </div>

    );
}

export default CartItem;