import './Animation.scss'
import {Link} from "react-router-dom";

const Animation = () => {
    return (
        <div className="parent-animate">

            <div className="block">
                <div className="top">
                    <h1 className="animate-title">Пожалуйста войдите</h1>
                    <h3 className="animate-subtitle">Вы не вошли в систему</h3>
                </div>
                <div className="container-animate">
                    <div className="ghost-copy">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                        <div className="four"></div>
                    </div>
                    <div className="ghost">
                        <div className="face">
                            <div className="eye"></div>
                            <div className="eye-right"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <div className="bottom">
                    <div className="buttons">
                        <Link to="/login" className="btn">Войти</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Animation;