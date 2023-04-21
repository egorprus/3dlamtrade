import React from 'react';
import { InputRadioButton } from './InputRadioButton';
import '../style.scss';
import { Field } from 'react-final-form'

export const RadioButton = (props) => {
    console.log(props)
    return (
        <div className="field">
            <label className="field__label" >
                {props.label}
                {require && '*'}
            </label>
            <div className="fields-group group-for-radiobutton">
                {props.values.map((value, index) => (
                    <InputRadioButton value={value} active={props.activeValue === value} input={props.input} index={index} key={index} />
                ))}
            </div>
        </div>
    );
};