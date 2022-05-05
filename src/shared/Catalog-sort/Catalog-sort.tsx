import React from "react";

import './Catalog-sort.scss';
import {Dropdown} from "react-bootstrap";

class CatalogSort extends React.Component<any, any>{
    dropdownItems = ['сперва новые', 'сперва дешевле', 'сперва дороже'];

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = { sortingTypeItem: 'сперва новые' };
    }

    handleChange(e: any) {
        this.setState({ sortingTypeItem: this.dropdownItems[e]});
        this.props.onSortTypeChange(e);
    }

    render() {
        return (
            <div className="sorting-wrapper">
                <Dropdown onSelect={this.handleChange}>
                    <Dropdown.Toggle className="sorting" id="dropdown-custom-components" as="button">
                        Порядок: {this.state.sortingTypeItem}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        { this.dropdownItems.map((dropdownItem, index) => <Dropdown.Item key={index} eventKey={index}>{dropdownItem}</Dropdown.Item>) }
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        );
    }
}

export default CatalogSort;