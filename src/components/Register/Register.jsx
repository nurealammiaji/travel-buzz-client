import { useContext, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AuthContext } from "../../Providers/Providers";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const { register, googleLogin, githubLogin } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);

    const errorToast = () => toast("Registration Error !!");
    const successToast = () => toast("Registration Successful !!");

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
                successToast();
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message);
                setDisplayError(error.message);
                errorToast();
            })
    }

    return (
        <div>
            <Toaster/>
            <Navigation></Navigation>
            <br /><br />
            <div className="py-10 rounded hero">
                <div className="flex">
                    <div className="flex-shrink-0 w-10/12 max-w-sm mx-auto shadow-2xl md:w-full card bg-base-100">
                        <form onSubmit={registerHandler} className="card-body">
                            {(displayError) && <p className="text-red-500">{displayError}</p>}
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;