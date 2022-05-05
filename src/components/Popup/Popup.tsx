import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Popup.scss';

const style = {
    margin: '56px 120px auto auto',
};

export default (props: any) => (
    <Popup modal closeOnDocumentClick open={props.isOpen} contentStyle={style}>
        <div className="popup-child">
            {props.children}
        </div>
    </Popup>
);