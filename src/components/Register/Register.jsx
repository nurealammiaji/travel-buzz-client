import { useContext, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AuthContext } from "../../Providers/Providers";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const { register, googleLogin, githubLogin } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);

    const navigate = useNavigate();
    const from = "/";

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        register(email, password)
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
                navigate(from, {replace: true});
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
                        <form onSubmit={registerHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="url" name="image" placeholder="url" className="input input-bordered" />
                            </div>
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
                                <label className="mt-2 label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            <div>
                                <div className="mt-3 form-control">
                                    <button type="submit" className="btn btn-primary">Register</button>
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

export default Register;