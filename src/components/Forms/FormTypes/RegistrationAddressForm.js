import React from 'react';
import { useForm } from "react-hook-form";
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';
import { InputDate } from '../Fields/InputDate/InputDate';
import { InputText } from '../Fields/InputText/InputText';
import { Checkbox } from '../Fields/Checkbox/Checkbox';
import { FormFooter } from './FormFooter';

export const RegistrationAddressForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h3 className="form__title">
                    Адрес регистрации
                </h3>
                <p className="form__text">
                    Введите свой действуйющий адрес прописки.
                </p>
            </div>
            <div className="form__fields">
                <div className='fields-rows'>
                    <div className='fields__row'>
                        <CustomSelect
                            {...FIELDS.country}
                            register={register(FIELDS.country.name)}
                            errors={errors.country}
                            control={control}
                        />
                        <CustomSelect
                            {...FIELDS.region}
                            register={register(FIELDS.region.name)}
                            errors={errors.region}
                            control={control}
                        />
                    </div>
                    <div className='fields__row'>
                        <InputText
                            {...FIELDS.city}
                            register={register(FIELDS.city.name, {validate: {...FIELDS.city.validate}})}
                            errors={errors.city}
                        />
                        <InputText
                            {...FIELDS.street}
                            register={register(FIELDS.street.name, {validate: {...FIELDS.street.validate}})}
                            errors={errors.street}
                        />
                    </div>
                    <div className='fields__row self-align'>
                        <div className='fields__row'>
                            <InputText
                                {...FIELDS.house}
                                register={register(FIELDS.house.name, {validate: {...FIELDS.house.validate}})}
                                errors={errors.house}
                            />
                            <InputText
                                {...FIELDS.apartment}
                                register={register(FIELDS.apartment.name, {validate: {...FIELDS.apartment.validate}})}
                                errors={errors.apartment}
                            />
                            <Checkbox {...FIELDS.apartmentStatus} />
                        </div>
                        <InputDate
                            {...FIELDS.registrationDate}
                            register={register(FIELDS.registrationDate.name, {valueAsDate: true})}
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
    country : {
        name: 'country',
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
    region: {
        name: 'region',
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
    city: {
        name: 'city',
        label: 'Город / Населенный пункт',
    },
    street: {
        name: 'street',
        label: 'Улица',
    },
    house: {
        name: 'house',
        label: 'Дом',
    },
    apartment: {
        name: 'apartment',
        label: 'Квартира',
    },
    apartmentStatus: {
        name: 'apartmentStatus',
        label: 'нет квартиры',
    },
    registrationDate: {
        name: 'registrationDate',
        label: 'Дата прописки',
    },
}