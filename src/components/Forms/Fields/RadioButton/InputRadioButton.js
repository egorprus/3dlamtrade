import React, { useRef } from 'react';
import { Field } from 'react-final-form'
import './style.scss';
import icon from '../../../../assets/icons/sex-icon.svg';
import icon1 from '../../../../assets/icons/sex-icon1.svg';

export const InputRadioButton = (props) => {
    const radioBtn = useRef(null);

    return (
        <div className={`field__radio-wrapper ${props.active ? 'active': ''}`}>
            <Field
                className="field__radio-input"
                name={props?.input?.name}
                component="input"
                type="radio"
                value={props.value}
                id={`radio-button${props.index + 1}`}
                ref={radioBtn}
            />
            <label className="field__radio-label" htmlFor={`radio-button${props.index + 1}`}>
                {props.value === 'М' ?
                    <svg className="field__radio-img" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={`${props.active ? '#5795FD' : '#B8B8B8'}`} d="M5 0.8125C5.66304 0.8125 6.29893 1.07589 6.76777 1.54473C7.23661 2.01357 7.5 2.64946 7.5 3.3125C7.5 3.97554 7.23661 4.61143 6.76777 5.08027C6.29893 5.54911 5.66304 5.8125 5 5.8125C4.33696 5.8125 3.70107 5.54911 3.23223 5.08027C2.76339 4.61143 2.5 3.97554 2.5 3.3125C2.5 2.64946 2.76339 2.01357 3.23223 1.54473C3.70107 1.07589 4.33696 0.8125 5 0.8125ZM3.125 7.0625H6.875C7.53804 7.0625 8.17393 7.32589 8.64277 7.79473C9.11161 8.26357 9.375 8.89946 9.375 9.5625V15.1875H7.5H2.5H0.625V9.5625C0.625 8.89946 0.888392 8.26357 1.35723 7.79473C1.82607 7.32589 2.46196 7.0625 3.125 7.0625Z"/>
                    </svg> :
                    <svg className="field__radio-img" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={`${props.active ? '#5795FD' : '#B8B8B8'}`} d="M6.76777 1.54473C6.29893 1.07589 5.66304 0.8125 5 0.8125C4.33696 0.8125 3.70107 1.07589 3.23223 1.54473C2.76339 2.01357 2.5 2.64946 2.5 3.3125C2.5 3.97554 2.76339 4.61143 3.23223 5.08027C3.70107 5.54911 4.33696 5.8125 5 5.8125C5.66304 5.8125 6.29893 5.54911 6.76777 5.08027C7.23661 4.61143 7.5 3.97554 7.5 3.3125C7.5 2.64946 7.23661 2.01357 6.76777 1.54473Z"/>
                        <path fill={`${props.active ? '#5795FD' : '#B8B8B8'}`} d="M0.625 15.1875H3.125H6.875H9.375L7.3875 8.825C7.075 7.8 6.125 7.0625 5 7.0625C3.875 7.0625 2.925 7.8 2.6125 8.825L0.625 15.1875Z"/>
                    </svg>                    
                }
                {props.value}
            </label>
        </div>
    );
};