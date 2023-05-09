import React from 'react';
import logo from '../../assets/icons/logo1.png';
import './style.scss'

export const MainForm = ({children}) => {
    return (
        <main className="main">
            <div className="main__header">
                <img src={logo} alt="form logo" />
            </div>
            {children}
        </main>
    );
};