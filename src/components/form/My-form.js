import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-simple-toasts';
import {useLocation, useNavigate} from "react-router";
import {useCookies} from "react-cookie";
import useLoginService from "../../services/LoginService";

import './My-form.scss'

const MyForm = ({setLoggedIn}) => {
    console.log(setLoggedIn)
    const [cookies, setCookie] = useCookies(['token']);
    const {register, login} = useLoginService();
    const location = useLocation();
    const navigate = useNavigate();

    const flag = location.pathname.includes('/login');

    const handleLogin = (data) => {
        login(data)
            .then(res => {
                setLoggedIn(true)
                if (res.status === 200) {
                    setCookie('token', res.data.access_token, { path: '/' });
                    localStorage.setItem('loggedIn', 'true')
                    toast('Вы вошли в свой аккаунт!', 3000)
                } else {
                    toast('Попробуйте еще раз!', 3000)
                }
                navigate('/')
            })
    }

    const handleRegister = (data) => {
        register(data)
            .then(res => {
                if (res.status === 200) {
                    toast('Вы успешно зарегистрировались!', 3000)
                    navigate('/login')
                } else {
                    toast('Попробуйте еще раз!', 3000)
                }
            })
    }


    return (
            <Formik
                initialValues={{ username: '', password: '' }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.username) {
                //         errors.username = 'Обязательное поле!';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
                //     ) {
                //         errors.username = 'Невалидный email адрес';
                //     }
                //     return errors;
                // }}
                onSubmit={(values, { setSubmitting }) => {
                    {flag ? handleLogin(values) : handleRegister(values)}
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="my-form">
                        <label htmlFor="">Введите ваш email</label>
                        <Field type="text" name="username" />
                        <ErrorMessage className="my-form__error" name="username" component="div" />

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