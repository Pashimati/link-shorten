import axios from "axios";
import {_apiBase, headers} from "./configs";


const useLoginService = () => {

    const register = ({username, password}) => {
        return axios.post(`${_apiBase}/register`, null, {
            params : {
                username,
                password
            },
            headers
        })
    }

    const login = ({username, password}) => {
        return axios.post(`${_apiBase}/login`, {username, password}, {

            headers
        })
    }
    return {
        register,
        login
    }


};

export default useLoginService;