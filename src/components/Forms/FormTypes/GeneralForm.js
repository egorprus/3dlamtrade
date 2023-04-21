import React from 'react';
import { Form, Field } from 'react-final-form'
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';
import { InputDate } from '../Fields/InputDate/InputDate';
import { InputText } from '../Fields/InputText/InputText';
import { RadioButton } from '../Fields/RadioButton/RadioButton';

export const GeneralForm = (props) => {
    return (
        <Form
            onSubmit={(values) => console.log(values)}
            initialValues={{lastName: 'Prus'}}
            render={ (props) => (
                <form className="form">
                    <div className="form__header">
                        <h3 className="form__title">
                            general
                        </h3>
                        <p className="form__text">
                            Введите свои персональные данные.
                        </p>
                    </div>
                    <div className="form__fields">
                        <div className="fields-columns">
                            <div className="fields__column">
                                {/* <Field {...FIELDS.lastName} /> */}
                                {/* <Field {...FIELDS.middleName} />
                                <Field {...FIELDS.citizenship} /> */}
                            </div>
                            <div className="fields__column">
                                {/* <Field {...FIELDS.firstName} /> */}
                                <Field {...FIELDS.mainCity} />
                                <div className="fields-group">
                                    <Field {...FIELDS.sex} activeValue={props.values['sex']} />
                                    <Field {...FIELDS.dob} />
                                </div>
                            </div>
                        </div>
                        <div className="fields-row">
                            {/* <Field {...FIELDS.placeOfBirth} /> */}
                        </div>
                    </div>
                    <pre>{JSON.stringify(props.values, 0, 2)}</pre>
                </form>
            )}
        />
    );
};

const FIELDS = {
    lastName : {
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Васильев',
        require: true,
        component: InputText
    },
    firstName: {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Иван',
        require: true,
        component: InputText
    },
    middleName: {
        name: 'middleName',
        label: 'Отчество',
        placeholder: 'Сергеевич',
        require: true,
        component: InputText
    },
    mainCity: {
        name: 'mainCity',
        label: 'Основной город',
        require: true,
        component: CustomSelect,
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
        require: true,
        component: InputText
    },
    sex: {
        name: 'sex',
        label: 'Пол',
        require: true,
        component: RadioButton,
        values: [
            'М',
            'Ж'
        ]
    },
    dob: {
        name: 'dob',
        label: 'Дата рождения',
        component: InputDate
    },
    placeOfBirth: {
        name: 'placeOfBirth',
        label: 'Место рождения (как указано в паспорте)',
        component: InputText
    }
}