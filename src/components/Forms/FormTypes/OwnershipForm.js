import React, { useEffect, useState } from 'react';
import { CustomSelect } from '../Fields/CustomSelect/CustomSelect';
import { FormFieldsForIP } from './FormFieldsForIP';
import { FormFieldsForOOO } from './FormFieldsForOOO';
import { FormFooter } from './FormFooter';
import { useForm } from "react-hook-form";

const ACTIVITY_TYPE_IP = 'ip';

export const OwnershipForm = () => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const [typeActivity, setTypeActivity] = useState();

    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        setTypeActivity(watch('kindOfActivity'));
    }, [watch('kindOfActivity')]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h3 className="form__title">
                    Форма собственности
                </h3>
                <p className="form__text">
                    Выберите форму собственности и заполните данные
                </p>
            </div>
            <div className="form__fields">
                <div className="fields-rows">
                <CustomSelect
                    {...FIELDS.kindOfActivity}
                    register={register(FIELDS.kindOfActivity.name)}
                    errors={errors.kindOfActivity}
                    control={control}
                />
                {
                    typeActivity === undefined ? '' : typeActivity.value === ACTIVITY_TYPE_IP ?
                        <FormFieldsForIP
                            register={register}
                            control={control}
                            errors={errors}
                        /> :
                        <FormFieldsForOOO
                            register={register}
                            control={control}
                            errors={errors}
                        />
                }
                </div>
            </div>
            <FormFooter pathname={window.location.pathname} />
        </form>
    );
};

const FIELDS = {
    kindOfActivity : {
        name: 'kindOfActivity',
        label: 'Вид деятельности',
        component: CustomSelect,
        options: [
            {
                value: 'ip',
                label: 'Индивидуальный предприниматель (ИП)'
            },
            {
                value: 'ooo',
                label: 'Общество с ограниченной ответственностью (ООО)'
            }
        ]
    }
}