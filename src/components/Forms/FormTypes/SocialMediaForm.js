import React from 'react';
import { useForm } from "react-hook-form";

import { FormFooter } from './FormFooter';

export const SocialMediaForm = (props) => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h3 className="form__title">
                    Социальные сети
                </h3>
                <p className="form__text">
                    Введите свои действуйющие ссылки на социальные сети и количество подписчиков.
                </p>
            </div>
            <div className="form__fields">
            </div>
            <FormFooter pathname={window.location.pathname} />
        </form>
    );
};

// const FIELDS = {
//     socialsMedia: {
//         name: 'media',
//         label: 'Сайт / Приложение',
//         component: CustomSelect,
//         options: [
//             {
//                 value: 'vk',
//                 label: 'Вконтакте'
//             },
//             {
//                 value: 'inst',
//                 label: 'Инстаграм'
//             },
//             {
//                 value: 'whatsapp',
//                 label: 'WhatApp'
//             },
//             {
//                 value: 'youtube',
//                 label: 'Youtube'
//             },
//             {
//                 value: 'ok',
//                 label: 'Одноклассники'
//             },
//             {
//                 value: 'facebook',
//                 label: 'Facebook'
//             },
//             {
//                 value: 'viber',
//                 label: 'Viber'
//             },
//             {
//                 value: 'twitter',
//                 label: 'Twitter'
//             },
//             {
//                 value: 'vimeo',
//                 label: 'Vimeo'
//             },
//             {
//                 value: 'skype',
//                 label: 'Skype'
//             },
//         ]
//     },
//     link: {
//         name: 'link',
//         component: InputText
//     }
// }