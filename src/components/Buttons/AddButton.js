import React from 'react';
import './style.scss'

export const AddButton = ({children}) => {
    return (
        <button className="btn btn-add" type="button">
            {children}
        </button>
    );
};