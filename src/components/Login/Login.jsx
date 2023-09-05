import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {

    const { login, googleLogin, githubLogin } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
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
        })
        .catch(error => {
            console.log(error.message);
            setDisplayError(error.message);
        })
    }

    return (
        <div>
            <br /><br />
            <div className="py-10 rounded hero bg-base-200">
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