import React from 'react';
import { useForm } from "react-hook-form";
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';
import { InputDate } from '../Fields/InputDate/InputDate';
import { InputText } from '../Fields/InputText/InputText';
import { RadioButton } from '../Fields/RadioButton/RadioButton';
import { minLength, onlyLetters, required } from '../validate/validate';
import { FormFooter } from './FormFooter';

export const GeneralForm = () => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h3 className="form__title">
                    general
                </h3>
                <p className="form__text">
                    Введите свои персональные данные.
                </p>
            </div>
            
            <div className="fields-rows">
                <div className="fields__row">
                    <InputText
                        {...FIELDS.lastName}
                        register={register(FIELDS.lastName.name, {validate: {...FIELDS.lastName.validate}})}
                        errors={errors.lastName}
                    />
                    <InputText
                        {...FIELDS.firstName}
                        register={register(FIELDS.firstName.name, {validate: {...FIELDS.firstName.validate}})}
                        errors={errors.firstName}
                    />
                </div>
                <div className="fields__row">                            
                    <InputText
                        {...FIELDS.middleName}
                        register={register(FIELDS.middleName.name, {validate: {...FIELDS.middleName.validate}})}
                        errors={errors.middleName}
                    />
                    <CustomSelect
                        {...FIELDS.mainCity}
                        register={register(FIELDS.mainCity.name)}
                        errors={errors.mainCity}
                        control={control}
                    />
                </div>
                <div className='fields__row'>
                    <CustomSelect
                        {...FIELDS.citizenship}
                        register={register(FIELDS.citizenship.name)}
                        errors={errors.citizenship}
                        control={control}
                    />
                    <div className="fields-group">
                        <RadioButton
                            {...FIELDS.sex}
                            currentValue={watch(FIELDS.sex.name)}
                            register={register(FIELDS.sex.name)}
                        />
                        <InputDate
                            {...FIELDS.dob}
                            register={register(FIELDS.dob.name, {valueAsDate: true})}
                            control={control}
                        />
                    </div>
                </div>
                <div className='fields__row'>
                    <InputText
                        {...FIELDS.placeOfBirth}
                        register={register(FIELDS.placeOfBirth.name, {validate: {...FIELDS.placeOfBirth.validate}})}
                        errors={errors.placeOfBirth}
                    />
                </div>
            </div>
            <FormFooter pathname={window.location.pathname} />
        </form>
    );
};

const FIELDS = {
    lastName : {
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Васильев',
        validate: {
            min: minLength(3),
            required: required
        },
        inputProcessing: onlyLetters
    },
    firstName: {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Иван',
        validate: {
            min: minLength(3),
            required: required
        }
    },
    middleName: {
        name: 'middleName',
        label: 'Отчество',
        placeholder: 'Сергеевич',
        validate: {
            min: minLength(3),
            required: required
        },
    },
    mainCity: {
        name: 'mainCity',
        label: 'Основной город',
        validate: {
            required: required
        },
        options: [
            {
                value: 'stPetersburg',
                label: 'Санкт-Петербург'
            },
            {
                value: 'moscow',
                label: 'Москва'
            },
            {
                value: 'kazan',
                label: 'Казань'
            },
            {
                value: 'novosibirsk',
                label: 'Новосибирск'
            },
            {
                value: 'vladivostok',
                label: 'Владивосток'
            },
            {
                value: 'sochi',
                label: 'Сочи'
            },
        ]
    },
    citizenship: {
        name: 'citizenship',
        label: 'Гражданство',
        component: InputText,
        validate: {
            required: required
        },
        options: [
            {
                value: 'rus',
                label: 'Российское'
            },
            {
                value: 'bel',
                label: 'Белорусское'
            },
            {
                value: 'usa',
                label: 'Американское'
            },
            {
                value: 'ger',
                label: 'Немецкое'
            }
        ]
    },
    sex: {
        name: 'sex',
        label: 'Пол',
        component: RadioButton,
        validate: {
            required: required
        },
        values: [
            'М',
            'Ж'
        ]
    },
    dob: {
        name: 'dob',
        label: 'Дата рождения',
        component: InputDate,
        validate: {
            required: required
        },
    },
    placeOfBirth: {
        name: 'placeOfBirth',
        label: 'Место рождения (как указано в паспорте)',
        component: InputText,
        validate: {
            min: minLength(3),
            required: required
        },
    }
}