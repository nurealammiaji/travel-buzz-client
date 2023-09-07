import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import Navigation from "../Navigation/Navigation";

const Login = () => {

    const { login, googleLogin, githubLogin } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message);
                if (error) {
                    setDisplayError(error.message);
                }
            })
    }

    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message);
                setDisplayError(error.message);
            })
    }

    const githubLoginHandler = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
                setDisplayError(error.message);
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <br /><br />
            <div className="py-10 rounded hero">
                <div className="flex">
                    <div className="flex-shrink-0 w-10/12 max-w-sm mx-auto shadow-2xl md:w-full card bg-base-100">
                        <form onSubmit={loginHandler} className="card-body">
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
                                <div className="flex justify-between mt-2">
                                    <label className="label">
                                        <Link to="/register" className="label-text-alt link link-hover">Need Account?</Link>
                                    </label>
                                    <label className="label">
                                        <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3 form-control">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <p className="my-3 italic">or</p>
                                <div className="mt-3 form-control">
                                    <button onClick={googleLoginHandler} type="button" className="btn btn-primary"><FaGoogle /> Google Login</button>
                                </div>
                                <div className="mt-3 form-control">
                                    <button onClick={githubLoginHandler} type="button" className="btn btn-primary"><FaGithub /> Github Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;