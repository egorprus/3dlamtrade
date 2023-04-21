import React from 'react';
import './style.scss';
import calendarIcon from '../../../../assets/icons/calendar.svg';

export const InputDate = ({label, require, input}) => {
    return (
        <div className="field">
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className="field__input-wrapper">
                <input className="field__input" id="input-date" type="date" {...input} required={require} />
                <label htmlFor="input-date" >
                    <img className="input-data-icon" src={calendarIcon} alt='calendar' />
                </label>
            </div>
        </div>
    );
};