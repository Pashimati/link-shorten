import Animation from "../animation/Animation";
import './Main.scss'
import AddShortLink from "../add-short-link/Add-short-link";

const Main = ({loggedIn}) => {

    const content = loggedIn ? <AddShortLink/> : <Animation/>;

    return (
        <div className="container">
            {content}
        </div>
    );
};

export default Main;