import React, { useState } from 'react';
import '../style.scss';

export const InputText = ({label, require, classes, register, errors, inputProcessing}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        let validationValue = e.target.value;
        if (inputProcessing) {
            validationValue = inputProcessing(validationValue);
        }
        setInputValue(validationValue);
    }

    return (
        <div className={`field ${classes}`}>
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className="field__input-wrapper">
                <input
                    className="field__input"
                    {...register}
                    type="text"
                    required={require}
                    onChange={handleChange}
                    value={inputValue}
                />
                {errors &&
                    <div className='field__error'>
                        {errors.type === 'currentLength' && (
                            <p>current lenght(not {inputValue.length})</p>
                        )
                        }    
                        {errors.type === "min" && (
                            <p>minimum</p>
                        )}
                        {errors.type === "required" && (
                            <p>obyazatelno</p>
                        )}
                    </div>
                }
            </div>

            
        </div>
    );
};