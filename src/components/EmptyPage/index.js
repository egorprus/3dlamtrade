import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../utils/formList';

export const EmptyPage = () => {
    return (
        <div>
            <Link to={pages[0].url} >Start</Link>
        </div>
    );
};