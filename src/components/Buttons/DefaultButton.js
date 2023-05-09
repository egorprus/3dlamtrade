import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

export const DefaultButton = ({children, path, classes}) => {
    return (
        <Link className={`btn ${classes}`} to={path}>
            {children}
        </Link>
    );
};