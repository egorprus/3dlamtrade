import React  from 'react';
import './style.scss';
import calendarIcon from '../../../../assets/icons/calendar.svg';
import { Controller } from "react-hook-form";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const InputDate = ({label, require, name, control}) => {
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);

    return (
        <div className="field date-wrapper">
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className="field__input-wrapper">
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <ReactDatePicker
                            className="input-date"
                            placeholderText="Select date"
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            maxDate={maxDate}
                            minDate={minDate}
                            selected={field.value}
                        />
                    )}
                />
                <label htmlFor="input-date" >
                    <img className="input-data-icon" src={calendarIcon} alt='calendar' />
                </label>
            </div>
        </div>
    );
};