import React from 'react';
import '../style.scss';
import { InputText } from '../Fields/InputText/InputText';
import { InputFile } from '../Fields/InputFile/InputFile';
import { InputDate } from '../Fields/InputDate/InputDate';
import { currentLength, required } from '../validate/validate';

export const FormFieldsForOOO = ({control, errors, register}) => {
    return (
        <>
            <div className='fields__row'>
                <InputText
                    {...FIELDS.fullName}
                    register={register(FIELDS.fullName.name, {validate: {...FIELDS.fullName.validate}})}
                    errors={errors.fullName}
                />
                <InputText
                    {...FIELDS.reduction}
                    register={register(FIELDS.reduction.name, {validate: {...FIELDS.reduction.validate}})}
                    errors={errors.reduction}
                />
            </div>
            <div className='fields__row gap-row-30'>
                <InputDate
                    {...FIELDS.registrationDate}
                    register={register(FIELDS.registrationDate.name, {valueAsDate: true})}
                    control={control}
                />
                <InputText
                    {...FIELDS.inn}
                    register={register(FIELDS.inn.name, {validate: {...FIELDS.inn.validate}})}
                    errors={errors.inn}
                />
                <InputFile
                    {...FIELDS.scanInn}
                    control={control}
                    register={register(FIELDS.scanInn.name, {valueAsDate: true})}
                />
            </div>
            <div className='fields__row'>
                <InputText
                    {...FIELDS.ogrn}
                    register={register(FIELDS.ogrn.name, {validate: {...FIELDS.ogrn.validate}})}
                    errors={errors.ogrn}
                />
                <InputFile
                    {...FIELDS.scanOgrn}
                    control={control}
                    register={register(FIELDS.scanOgrn.name, {valueAsDate: true})}
                />
            </div>
        </>
    );
};

const FIELDS = {
    fullName: {
        name: 'fullName',
        label: 'Наименование полное',
        classes: 'flex-3',
    },
    reduction: {
        name: 'reduction',
        label: 'Сокращение',
    },
    ogrn: {
        name: 'ogrn',
        label: 'ОГРН',
        classes: 'width-147',
        validate: {
            currentLength: currentLength(13),
            required: required
        },
    },
    scanOgrn: {
        name: 'scanOgrn',
        label: 'Скан ОГРН',
    },
    inn: {
        name: 'inn',
        label: 'ИНН',
        validate: {
            currentLength: currentLength(10),
            required: required
        },
    },
    scanInn: {
        name: 'scanInn',
        label: 'Скан ИНН',
        classes: 'flex-2'
    },
    registrationDate: {
        name: 'registrationDate',
        label: 'Дата регистрации',
    },
}