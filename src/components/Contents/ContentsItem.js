import React from 'react';
import { Link } from 'react-router-dom';

export const ContentsItem = ({changePage, page, index}) => {
    return (
        <li className={`contents__item form-name ${index === 1 && 'form-name--active'}`}>
            <span className="form-name__index">{index}</span>
            <p className="form-name__text">{page.title}</p>
        </li>
    )
}