import React from 'react';

import './Header.scss';

function Header() {
   return (
        <div className="header catalog-header">
            <div className="header-title">Интерьер.</div>
            <div className="header-title-other">
                <div>Каталог</div>
                <div>Корзина</div>
            </div>
            <div className="header-title-cart">
                <img src="/images/icons/Cart.svg" alt=""/>
            </div>
        </div>
    );
}


export default Header;