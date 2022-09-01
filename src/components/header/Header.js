import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <Link to="/" className="logo">Link-shorten</Link>
                <ul className="menu-list">
                    <li className="menu-list__item">
                        <Link className="menu-list__link" to="/">Главная</Link>
                    </li>
                    <li className="menu-list__item">
                        <Link className="menu-list__link" to="registration">Регистрация</Link>
                    </li>
                    <li className="menu-list__item">
                        <Link className="menu-list__link" to="login">Вход</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;