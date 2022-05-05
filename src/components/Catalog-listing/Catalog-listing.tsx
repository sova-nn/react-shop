import React from 'react';
import {orderBy} from "lodash";

import './Catalog-listing.scss';

import CatalogItem from "../Catalog-item/Catalog-item";
import { mockItems } from '../../mocks/items';
import {CatalogItemModel} from "../../models/CatalogItem.model";
import Popup from "../Popup/Popup";
import CartItem from "../Cart-item/Cart-item";

class CatalogListing extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            mockItems: mockItems,
            cart: [],
            isOpen: false,
        }

        this.onAddItem = this.onAddItem.bind(this);
    }

    onAddItem(item: any) {
        let cartItems = this.state.cart;
        cartItems.push(item);
        this.setState({cart: cartItems, isOpen:true});
        setTimeout(() => this.setState({isOpen:false}), 1500);
    }

    render() {
        const sortType = this.props.sortType;
        const items = this.state.mockItems;
        const isOpen = this.state.isOpen;

        return (
            <>
                {sortType === "0" &&
                    <div className="catalog-container">
                        { items.map((item: CatalogItemModel, idx: number) => {
                            return (<CatalogItem key={idx} item={item} add={this.onAddItem}/>)
                            })
                        }
                    </div>
                }
                {sortType === "1" &&
                    <div className="catalog-container">
                        { orderBy(items, 'price').map((item: CatalogItemModel, idx: number) => {
                            return (<CatalogItem key={idx} item={ item } add={this.onAddItem} />)
                        }) }
                    </div>
                }
                {sortType === "2" &&
                    <div className="catalog-container">
                        { orderBy(items, 'price', 'desc').map((item: CatalogItemModel, idx: number) => {
                            return (<CatalogItem key={idx} item={ item } add={this.onAddItem} />)
                        }) }
                    </div>
                }
                <Popup isOpen={isOpen}>
                    {this.state.cart.map((cartItem: any, key: number) => <CartItem counter={false} key={key} item={cartItem} popup/>)}
                </Popup>
            </>

        );
    }
}


export default CatalogListing;