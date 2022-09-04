import "./Short-link-info.scss"
import {Link} from "react-router-dom";

const ShortLinkInfo = ({data}) => {
    if (data === 422) {
        return <span className="error">Произошла ошибка. Попробуйте еще раз!</span>
    }

    return (
        <>
            {data && data !== 422 ? (
                <div className="short-link-info-container">
                    <div className="row">
                        <div className="col-sm-6">
                            <span className="long-url">{data.data.target.substring(1,70)}...</span>
                        </div>

                        <div className="col-sm-3">
                            <span className="short-url">{data.data.short}</span>
                        </div>
                        <div className="col-sm-3">
                            <div className="button-group">
                                <button id="copy" className="btn-sl">Копировать</button>
                                <Link className="sht-link" to="statistic-links">статистика</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null

            }
        </>

    );
};

export default ShortLinkInfo;