import { Link } from "react-router-dom";
import './Header.scss'
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const Header = ({setLoggedIn, loggedIn}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const logout = (e) => {
        e.preventDefault()
        removeCookie('token')
        localStorage.removeItem('loggedIn')
        setLoggedIn(false)
    }

    return (
        <>
            <header className="header">
                <nav className="menu">
                    <Link to="/" className="logo">Link-shorten</Link>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <Link className="menu-list__link" to="/">Главная</Link>
                        </li>
                        <li className="menu-list__item">
                            <Link className="menu-list__link" to="statistic-links">Статистика</Link>
                        </li>
                        <li className="menu-list__item">
                            <Link className="menu-list__link" to="registration">Регистрация</Link>
                        </li>
                        <li className="menu-list__item">
                            {loggedIn? <Link className="menu-list__link" to="/" onClick={(e) => logout(e)}>Выход</Link> :
                                <Link className="menu-list__link" to="login">Вход</Link>
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;