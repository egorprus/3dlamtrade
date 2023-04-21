import React from 'react';
import './style.scss'

export const DefaultButton = ({children}) => {
    return (
        <button className="btn btn-default" type="button">
            {children}
        </button>
    );
};