import React from 'react';
import '../style.scss';

export const InputText = ({label, require, input}) => {
    return (
        <div className="field">
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <input className="field__input" type="text" {...input} required={require} />
        </div>
    );
};