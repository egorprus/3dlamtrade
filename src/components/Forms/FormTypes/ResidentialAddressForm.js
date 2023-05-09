import React from 'react';
import { useForm } from "react-hook-form";
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';
import { InputDate } from '../Fields/InputDate/InputDate';
import { InputText } from '../Fields/InputText/InputText';
import { Checkbox } from '../Fields/Checkbox/Checkbox';
import { FormFooter } from './FormFooter';

export const ResidentialAddressForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h3 className="form__title">
                    Адрес проживания
                </h3>
                <p className="form__text">
                    Введите свой действуйющий адрес проживания.
                </p>
            </div>
            <div className="form__fields">
                <div className='fields-rows'>
                    <div className='fields-rows'>
                        <Checkbox {...FIELDS.addressStatus} />
                    </div>
                    <div className='fields__row'>
                        <CustomSelect
                            {...FIELDS.countryCurrent}
                            register={register(FIELDS.countryCurrent.name)}
                            errors={errors.countryCurrent}
                            control={control}
                        />
                        <CustomSelect
                            {...FIELDS.regionCurrent}
                            register={register(FIELDS.regionCurrent.name)}
                            errors={errors.regionCurrent}
                            control={control}
                        />
                    </div>
                    <div className='fields__row'>
                        <InputText
                            {...FIELDS.cityCurrent}
                            register={register(FIELDS.cityCurrent.name, {validate: {...FIELDS.cityCurrent.validate}})}
                            errors={errors.cityCurrent}
                        />
                        <InputText
                            {...FIELDS.streetCurrent}
                            register={register(FIELDS.streetCurrent.name, {validate: {...FIELDS.streetCurrent.validate}})}
                            errors={errors.streetCurrent}
                        />
                    </div>
                    <div className='fields__row self-align'>
                        <div className='fields__row'>
                            <InputText
                                {...FIELDS.houseCurrent}
                                register={register(FIELDS.houseCurrent.name, {validate: {...FIELDS.houseCurrent.validate}})}
                                errors={errors.houseCurrent}
                            />
                            <InputText
                                {...FIELDS.apartmentCurrent}
                                register={register(FIELDS.apartmentCurrent.name, {validate: {...FIELDS.apartmentCurrent.validate}})}
                                errors={errors.apartmentCurrent}
                            />
                            <Checkbox {...FIELDS.apartmentStatusCurrent} />
                        </div>
                        <InputDate
                            {...FIELDS.registrationDateCurrent}
                            register={register(FIELDS.registrationDateCurrent.name, {valueAsDate: true})}
                            control={control}
                        />
                    </div>
                </div>
            </div>
            <FormFooter pathname={window.location.pathname} />
        </form>
    );
};

const FIELDS = {
    addressStatus: {
        name: 'addressStatus',
        label: 'Адрес регистрации и фактического проживания совпадают',
    },
    countryCurrent : {
        name: 'countryCurrent',
        label: 'Страна',
        options: [
            {
                value: 'rus',
                label: 'Россия'
            },
            {
                value: 'bel',
                label: 'Беларусь'
            },
            {
                value: 'usa',
                label: 'США'
            },
            {
                value: 'ger',
                label: 'Германия'
            },
        ]
    },
    regionCurrent: {
        name: 'regionCurrent',
        label: 'Регион',
        options: [
            {
                value: 'a',
                label: 'а',
            },
            {
                value: 'b',
                label: 'б',
            },
            {
                value: 'c',
                label: 'в',
            }
        ]
    },
    cityCurrent: {
        name: 'cityCurrent',
        label: 'Город / Населенный пункт',
    },
    streetCurrent: {
        name: 'streetCurrent',
        label: 'Улица',
    },
    houseCurrent: {
        name: 'houseCurrent',
        label: 'Дом',
    },
    apartmentCurrent: {
        name: 'apartmentCurrent',
        label: 'Квартира',
    },
    apartmentStatusCurrent: {
        name: 'apartmentStatusCurrent',
        label: 'нет квартиры',
    },
    registrationDateCurrent: {
        name: 'registrationDateCurrent',
        label: 'Дата прописки',
    },
}