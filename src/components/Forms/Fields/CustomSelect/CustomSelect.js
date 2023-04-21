import React from 'react';
import './style.scss';
import Select from 'react-select';

export const CustomSelect = (props) => {
    return (
        <div className="field">
            <label className="field__label" >
                {props.label}
                {props.require && '*'}
            </label>
            <div className="field__input-wrapper">
                <Select options={props.options} className="custom-select" {...props.input} />
            </div>
        </div>
    );
};