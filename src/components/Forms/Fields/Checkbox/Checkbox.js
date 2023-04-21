import React from 'react';
import './style.scss';

export const Checkbox = ({label, require, input}) => {
    return (
        <div className="field checkbox">
            <input className="checkbox-input" type="checkbox" {...input} id={input?.name} />
            <label className="field__label" htmlFor={input?.name} >
                {label}
                {require && '*'}
            </label>
        </div>
    );
};