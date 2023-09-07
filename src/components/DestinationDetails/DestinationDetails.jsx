import { useLoaderData } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const DestinationDetails = () => {

    const destination = useLoaderData();
    console.log(destination);

    return (
        <div>
            <Navigation></Navigation>
            <br /><br />
            <h3 className="text-xl">Destination Details</h3>
        </div>
    );
};

export default DestinationDetails;