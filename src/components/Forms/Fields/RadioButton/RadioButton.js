import React from 'react';
import { InputRadioButton } from './InputRadioButton';
import '../style.scss';

export const RadioButton = ({values, label, require, currentValue, name, register}) => {
    return (
        <div className="field">
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className="fields-group group-for-radiobutton">
                {values.map((value, index) => (
                    <InputRadioButton value={value} active={currentValue === value} name={name} register={register} index={index} key={index} />
                ))}
            </div>
        </div>
    );
};