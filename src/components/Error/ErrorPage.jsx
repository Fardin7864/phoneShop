import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Ooops!</h1>
            <p>Sorry an unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button className="btn btn-warning"><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;