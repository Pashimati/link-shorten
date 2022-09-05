import axios from "axios";
import {useCookies} from "react-cookie";
import {_apiBase, _headers} from "./configs";

const useLinkShortenService = () => {
    const [cookies, setCookie] = useCookies(['token']);

    const shortenLink = (link) => {
       return  axios.post(`${_apiBase}/squeeze`,null, {
            headers: _headers(cookies.token),
           params: {
                link: link
           }
        })
    }

    const getStatistics = (offset = 0) => {
       return  axios.get(`${_apiBase}/statistics`, {
           headers: _headers(cookies.token),
           params: {
               limit: 10,
               offset: offset,
           }
        })
    }

    return {
        shortenLink,
        getStatistics
    }
};

export default useLinkShortenService;