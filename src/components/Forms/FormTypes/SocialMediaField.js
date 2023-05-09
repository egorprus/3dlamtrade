import React, { useEffect, useState } from 'react';
import '../style.scss';
import { Field } from 'react-final-form'
import { InputText } from '../Fields/InputText/InputText';
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';

export const SocialMediaField = ({name, index, fields, values}) => {
    const [media, setMedia] = useState(false);
    
    useEffect(() => {
        setMedia(values.media);
    }, [values])

    return (
        <>
            <div className='fields__row' key={name}>
                <Field {...FIELDS.socialsMedia} name={`${name}.media`}  />
                {media &&
                    <Field {...FIELDS.link} name={`${name}.link`} />
                }
                <button type="button" onClick={() => fields.remove(index)}>
                    Remove
                </button>
            </div>
        </>
    );
};

const FIELDS = {
    socialsMedia: {
        label: 'Сайт / Приложение',
        component: CustomSelect,
        options: [
            {
                value: 'vk',
                label: 'Вконтакте'
            },
            {
                value: 'inst',
                label: 'Инстаграм'
            },
            {
                value: 'whatsapp',
                label: 'WhatApp'
            },
            {
                value: 'youtube',
                label: 'Youtube'
            },
            {
                value: 'ok',
                label: 'Одноклассники'
            },
            {
                value: 'facebook',
                label: 'Facebook'
            },
            {
                value: 'viber',
                label: 'Viber'
            },
            {
                value: 'twitter',
                label: 'Twitter'
            },
            {
                value: 'vimeo',
                label: 'Vimeo'
            },
            {
                value: 'skype',
                label: 'Skype'
            },
        ]
    },
    link: {
        name: 'link',
        component: InputText
    }
}