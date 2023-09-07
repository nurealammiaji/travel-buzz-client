import { Link, useLoaderData } from 'react-router-dom';

const DestinationDetails = () => {

    const destination = useLoaderData();
    const { title, details } = destination;

    return (
        <div>
            <div className="min-h-screen hero">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="p-6 text-left text-white md:text-center">
                        {(destination) &&
                            <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">{details}</p>
                            </div>
                        }
                    </div>
                    <div className="flex-shrink-0 w-11/12 mx-auto shadow-2xl md:w-8/12 card bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input type="text" name='origin' placeholder="Type Origin" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Destination</span>
                                </label>
                                <input type="text" placeholder="Type Destination" className="input input-bordered" />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input type="text" placeholder="From" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="text" placeholder="To" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="mt-6 form-control">
                                <Link to="/booking" className='btn btn-primary'>
                                    <button type='submit'>Book</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;