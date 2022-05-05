import React from 'react';

import './Catalog.scss';

import CatalogListing from "../../components/Catalog-listing/Catalog-listing";
import Header from "../../components/Header/Header"
import CatalogSort from "../../shared/Catalog-sort/Catalog-sort";

class Catalog extends React.Component{
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {sortType: "0"};
    }

    handleChange(e: string) {
        this.setState({sortType: e});
    }

    render() {
        // @ts-ignore
        const sortType: any = this.state.sortType;

        return (
            <div className="catalog-wrapper">
                <Header />
                <CatalogSort onSortTypeChange={this.handleChange}/>
                <CatalogListing sortType={sortType}/>
            </div>
        );
    }
}


export default Catalog;