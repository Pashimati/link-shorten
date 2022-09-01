import Animation from "../animation/Animation";
import './Main.scss'

const Main = () => {

    const flag = false;
    const content = flag ? <h1>Hello</h1> : <Animation/>;

    return (
        <div className="container">
            {content}
        </div>
    );
};

export default Main;