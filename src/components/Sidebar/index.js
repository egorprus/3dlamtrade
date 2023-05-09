import React from 'react';
import { Contents } from '../Contents/Contents';
import './style.scss'

export const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <aside className="sidebar">
                <h2 className="sidebar__title">
                    Создание аккаунта
                </h2>
                <p className="sidebar__text">
                    Заполните все пункты данной формы и нажмите кнопку «Сохранить».
                </p>
                <Contents />
            </aside>
        </div>
    )
};