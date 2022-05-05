import React from 'react';
import './Catalog-item.scss';

function CatalogItem(props: any) {
    const { item } = props;

    return (
        <div className="catalog-item-container">
            <div className="catalog-item">
                <div className="catalog-item-picture" onClick={() => props.add(item)}>
                    <img src={item?.image} alt=""/>
                </div>
                <div className="catalog-item-title">{item?.title}</div>
                <div className="catalog-item-description">{item?.description}</div>
                <div className="catalog-item-price">{item?.price} Руб.</div>
            </div>
        </div>
    );
}

export default CatalogItem;