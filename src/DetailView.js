import React from 'react';
import './DetailView.scss';

const DetailView = (props) => {

    return(
        <div className="detailViewContainer" style={{display: props.isOpen === true ? "flex" : "none"}}>
            <button onClick={() => props.setIsOpen(false)}>X</button>
        </div>
    );
};

export default DetailView;
