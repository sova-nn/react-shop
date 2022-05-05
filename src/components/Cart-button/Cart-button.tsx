import React from 'react';


import "./Cart-button.scss";

function CartButton(props: any) {
    return (
        <button className={props.dark ? 'btn rounded-pill btn-dark' : 'btn rounded-pill btn-light border-dark'}>
            {props.name}
        </button>
    );
}

export default CartButton;