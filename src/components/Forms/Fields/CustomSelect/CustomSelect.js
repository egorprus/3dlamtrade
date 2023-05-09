import React from 'react';
import './style.scss';
import Select from 'react-select';
import { Controller } from "react-hook-form";

export const CustomSelect = ({label, require, name, options, errors, className, control}) => {
    return (
        <div className="field">
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className={`field__input-wrapper ${className}`}>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: 'error' }}
                    render={({ field }) => (
                        <Select
                            options={options}
                            className="custom-select"
                            onChange={field.onChange}
                            selected={field.value}
                        />
                    )}
                />
                { errors &&
                    <div className='field__error'>
                        {errors.message}
                    </div>
                }
            </div>
        </div>
    );
};