import "./Add-short-link.scss"
import ShortLinkInfo from "../short-link-info/Short-link-info";
import {useState} from "react";


const AddShortLink = () => {
    const [link, setLink] = useState()

const data = true

    const shortLink = (e) => {
        e.preventDefault()
    }


    const onChangeHandler = event => {
        setLink(event.target.value);
    };

    return (
        <div className="container-form">
            <h3 className="form-for-link__title">Cократите ссылку в 1 клик</h3>
            <form id='form' className="form-for-link">
                <input
                    onChange={onChangeHandler}
                    className="form-for-link__input"
                    type="text"
                    placeholder="Вставьте ссылку для сокращения"
                />
                <button className="form-for-link__btn" onClick={(e) => shortLink(e)}>Сократить</button>
            </form>
            <ShortLinkInfo data={data}/>
        </div>
    );
};

export default AddShortLink;

