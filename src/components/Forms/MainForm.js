import React from 'react';
import logo from '../../assets/icons/logo1.png';
import { DefaultButton } from '../Buttons/DefaultButton';
import { SaveButton } from '../Buttons/SaveButton';
import './style.scss'

export const MainForm = (props) => {
    return (
        <main className="main">
            <div className="main__header">
                <img src={logo} alt="form logo" />
            </div>
            {props.children}
            <div className="main__footer">
                <DefaultButton>
                    Назад
                </DefaultButton>
                <SaveButton>Далее</SaveButton>
            </div>
        </main>
    );
};