import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './My-form.scss'

const MyForm = () => {
    return (
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Обязательное поле!';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Невалидный email адрес';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="my-form">
                        <label htmlFor="">Введите ваш email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage className="my-form__error" name="email" component="div" />

                        <label>Введите пароль</label>
                        <Field type="password" name="password" />
                        <ErrorMessage className="my-form__error" name="password" component="div" />
                        <button className="my-form__btn" type="submit" disabled={isSubmitting}>
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
    );
};

export default MyForm;