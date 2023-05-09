import React, { useEffect, useState } from 'react';
import { DefaultButton } from '../../Buttons/DefaultButton';
import { DEFAULT_URLS } from '../../../utils/constant';
import { getCurrentFormIndex } from '../../../utils/getCurrentFormIndex';

export const FormFooter = ({pathname}) => {
    const [nextFormPath, setNextFormPath] = useState('');
    const [prevFormPath, setPrevFormPath] = useState('');
    const currentFormIndex = getCurrentFormIndex();

    useEffect(() => {
        if (currentFormIndex >= 0) {
            setNextFormPath(DEFAULT_URLS[currentFormIndex + 1]);
            setPrevFormPath(DEFAULT_URLS[currentFormIndex - 1]);
        }
    }, []);

    return (
        <div className="form__footer">
            <DefaultButton classes={`btn-default ${currentFormIndex < 1 ? 'btn-disabled' : ''}`} path={prevFormPath} >
                Назад
            </DefaultButton>
            <DefaultButton classes={`btn-save ${currentFormIndex > DEFAULT_URLS.length - 2 ? 'btn-disabled' : ''}`} path={nextFormPath} >
                Далее
            </DefaultButton>
        </div>
    )
};