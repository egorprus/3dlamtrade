import React from 'react';
import './style.scss'

export const SaveButton = ({children}) => {
    return (
        <button className="btn btn-save" type="button">
            {children}
        </button>
    );
};