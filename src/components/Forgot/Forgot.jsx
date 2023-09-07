import { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import { AuthContext } from "../../Providers/Providers";

const Forgot = () => {

    const { forgot } = useContext(AuthContext);

    const forgotHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        forgot(email)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <Navigation></Navigation>
            <br /><br />
            <div className="py-10 rounded hero">
                <div className="flex">
                    <div className="flex-shrink-0 w-10/12 max-w-sm mx-auto shadow-2xl md:w-full card bg-base-100">
                        <form onSubmit={forgotHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div>
                                <div className="mt-3 form-control">
                                    <button type="submit" className="btn btn-primary">Send Reset Link</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;