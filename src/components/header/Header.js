import { Link } from "react-router-dom";
import './Header.scss'
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router";

const Header = ({setLoggedIn, loggedIn}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault()
        removeCookie('token')
        localStorage.removeItem('loggedIn')
        setLoggedIn(false)
        navigate('/')
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
                        {
                            loggedIn
                                ? <li className="menu-list__item">
                                    <Link className="menu-list__link" to="statistic-links">Статистика</Link>
                                  </li>
                                : null
                        }

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