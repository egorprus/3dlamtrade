import React from 'react';
import '../style.scss';
import { InputText } from '../Fields/InputText/InputText';
import { InputFile } from '../Fields/InputFile/InputFile';
import { InputDate } from '../Fields/InputDate/InputDate';
import { Checkbox } from '../Fields/Checkbox/Checkbox';
import { currentLength, required } from '../validate/validate';

export const FormFieldsForIP = ({control, errors, register}) => {
    return (
        <>
            <div className='fields__row gap-row-30'>
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
                <InputDate
                    {...FIELDS.registrationDate}
                    register={register(FIELDS.registrationDate.name, {valueAsDate: true})}
                    control={control}
                />
            </div>
            <div className='fields__row'>
                <InputText
                    {...FIELDS.ogrnip}
                    register={register(FIELDS.ogrnip.name, {validate: {...FIELDS.ogrnip.validate}})}
                    errors={errors.ogrnip}
                />
                <InputFile {...FIELDS.scanOgrnip} />
            </div>
            <div className='fields__row'>
                <div className='fields__column'>
                    <InputFile {...FIELDS.scanOfLeaseAgreement} />
                    <Checkbox {...FIELDS.statusContract} />
                </div>
                <InputFile {...FIELDS.scanOfFromUSRIP} />
            </div>
        </>
    );
};

const FIELDS = {
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
    ogrnip: {
        name: 'ogrnip',
        label: 'ОГРНИП',
        validate: {
            currentLength: currentLength(15),
            required: required
        },
    },
    scanOgrnip: {
        name: 'scanOgrnip',
        label: 'Скан ОГРНИП',
    },
    scanOfLeaseAgreement: {
        name: 'scanOfLeaseAgreement',
        label: 'Скан договора аренды помещения (офиса)',
    },
    scanOfFromUSRIP: {
        name: 'scanOfFromUSRIP',
        label: 'Скан выписки из ЕГРИП (не старше 3 месяцев)*',
    },
    statusContract: {
        name: 'statusContract',
        label: 'Нет договора',
    }
}