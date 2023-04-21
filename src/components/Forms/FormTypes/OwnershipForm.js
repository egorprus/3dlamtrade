import React from 'react';
import { Form, Field } from 'react-final-form'
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';
import { InputDate } from '../Fields/InputDate/InputDate';
import { InputFile } from '../Fields/InputFile/InputFile';
import { InputText } from '../Fields/InputText/InputText';
import { Checkbox } from '../Fields/Checkbox/Checkbox';

export const OwnershipForm = (props) => {
    return (
        <Form
            onSubmit={(values) => console.log(values)}
            render={ (props) => (
                <form className="form">
                    <div className="form__header">
                        <h3 className="form__title">
                            Форма собственности
                        </h3>
                        <p className="form__text">
                            Выберите форму собственности и заполните данные
                        </p>
                    </div>
                    <div className="form__fields">
                        <Field {...FIELDS.kindOfActivity} />
                        <Field {...FIELDS.scanInn} values={props.values} />
                        <Field {...FIELDS.statusContract} />
                    </div>
                    <pre>{JSON.stringify(props.values, 0, 2)}</pre>
                </form>
            )}
        />
    );
};

const FIELDS = {
    kindOfActivity : {
        name: 'kindOfActivity',
        label: 'Вид деятельности',
        require: true,
        component: CustomSelect,
        options: [
            {
                value: 'OOO',
                label: 'OOO'
            },
            {
                value: 'OAO',
                label: 'OAO'
            }
        ]
    },
    fullName: {
        name: 'fullName',
        label: 'Наименование полное',
        require: true,
        component: InputText
    },
    reduction: {
        name: 'reduction',
        label: 'Сокращение',
        require: true,
        component: InputText
    },
    registrationDate: {
        name: 'registrationDate',
        label: 'Дата регистрации',
        require: true,
        component: InputDate
    },
    inn: {
        name: 'inn',
        label: 'ИНН',
        require: true,
        component: InputText
    },
    scanInn: {
        name: 'scanInn',
        label: 'Скан ИНН',
        require: true,
        component: InputFile
    },
    ogrn: {
        name: 'ogrn',
        label: 'ОГРН',
        require: true,
        component: InputText
    },
    scanOgrn: {
        name: 'scanOgrn',
        label: 'Скан ОГРН',
        require: true,
        component: InputFile
    },
    ogrnip: {
        name: 'ogrnip',
        label: 'ОГРНИП',
        require: true,
        component: InputFile
    },
    scanOgrnip: {
        name: 'scanOgrnip',
        label: 'Скан ОГРНИП',
        require: true,
        component: InputFile
    },
    scanOfLeaseAgreement: {
        name: 'scanOfLeaseAgreement',
        label: 'Скан договора аренды помещения (офиса)',
        component: InputFile
    },
    scanOfFromUSRIP: {
        name: 'scanOfFromUSRIP',
        label: 'Скан выписки из ЕГРИП (не старше 3 месяцев)*',
        require: true,
        component: InputFile
    },
    statusContract: {
        name: 'statusContract',
        label: 'Нет договора',
        component: Checkbox
    }
}