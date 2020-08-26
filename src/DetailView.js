import React from 'react';
import './DetailView.scss';
import { useHistory } from 'react-router-dom';

const DetailView = (props) => {

    const history = useHistory();

    return(
        <div className="detailViewContainer">
            <button onClick={() => history.push('/')}>X</button>
        </div>
    );
};

export default DetailView;
