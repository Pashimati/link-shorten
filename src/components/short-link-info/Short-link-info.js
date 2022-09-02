import "./Short-link-info.scss"
import {Link} from "react-router-dom";

const ShortLinkInfo = ({data}) => {

    if (!data) {
        return <span className="error">Произошла ошибка. Попробуйте еще раз!</span>
    }

    return (
        <div className="short-link-info-container">
            <div className="row">
                <div className="col-sm-6">
                    <span className="long-url">https://hyperhost.ua/tools/ru/surli?gclid=Cj0KCQjw</span>
                </div>

                <div className="col-sm-3">
                    <span className="short-url">http://surl.li/cwtlq</span>
                </div>
                <div className="col-sm-3">
                    <div className="button-group">
                        <button id="copy" className="btn-sl">Копировать</button>
                        <Link className="sht-link" to="statistic-links">статистика</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortLinkInfo;