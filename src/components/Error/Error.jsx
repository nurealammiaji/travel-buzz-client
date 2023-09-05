import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <br /><br />
            <h3 className="text-xl">{error.status}</h3>
            <h3 className="my-3 text-xl">{error.statusText}</h3>
            <p>{error.data}</p>
        </div>
    );
};

export default Error;