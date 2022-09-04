import axios from "axios";
import {useCookies} from "react-cookie";
import {_apiBase, _headers} from "./configs";


const useLoginService = () => {
    const [cookies, setCookie] = useCookies(['token']);


    const register = ({username, password}) => {
        return axios.post(`${_apiBase}/register`, null, {
            params : {
                username,
                password
            },
            headers: _headers(cookies.token),
        })
    }

    const login = ({username, password}) => {
        return axios.post(`${_apiBase}/login`, {username, password}, {
            headers: _headers(cookies.token),
        })
    }
    return {
        register,
        login
    }


};

export default useLoginService;