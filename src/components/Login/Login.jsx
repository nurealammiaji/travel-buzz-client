import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <br /><br />
            <div className="min-h-screen rounded hero bg-base-200">
                <div className="flex-col hero-content">
                    <div className="flex-shrink-0 w-10/12 max-w-sm shadow-2xl md:w-full card bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div>
                                <div className="mt-3 form-control">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <p className="my-3 italic">or</p>
                                <div className="mt-3 form-control">
                                <button type="button" className="btn btn-primary">Google Login</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;