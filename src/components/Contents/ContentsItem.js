import React from 'react';

export const ContentsItem = ({ page, index, isActive}) => {
    return (
        <li className={`contents__item form-name ${isActive && 'form-name--active'}`}>
            <span className="form-name__index">{index}</span>
            <p className="form-name__text">{page.title}</p>
        </li>
    )
}