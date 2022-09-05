import MyForm from "../form/My-form";

const Login = ({setLoggedIn}) => {
    return (
        <div className="login-wrap">
            <h2 className="login__title">Войдите пожалуйста</h2>
            <MyForm setLoggedIn={setLoggedIn}/>
        </div>
    );
};

export default Login;