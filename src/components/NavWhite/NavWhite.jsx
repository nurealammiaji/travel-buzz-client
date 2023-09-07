import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Providers";
import { FaUserLarge } from "react-icons/fa6";

const NavWhite = () => {

    const { user, logout } = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="w-full text-white bg-transparent shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:block">
                            <div className="w-28">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 rounded-md outline-none focus:border-white focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <FaX />
                                    ) : (
                                        <FaBarsStaggered />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="font-semibold hover:text-yellow-400">
                                    <div className="form-control">
                                        <input type="text" placeholder="Search" className="mx-auto bg-transparent border-white w-52 md:w-auto input input-bordered" />
                                    </div>
                                </li>
                                <li className="font-semibold hover:text-yellow-400">
                                    <NavLink to="/news">News</NavLink>
                                </li>
                                <li className="font-semibold hover:text-yellow-400">
                                    <NavLink to="/destination">Destination</NavLink>
                                </li>
                                <li className="font-semibold hover:text-yellow-400">
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li className="font-semibold hover:text-yellow-400">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                {
                                    (user) ? <li className="p-1 font-semibold text-gray-600 border-2 border-white rounded-r-none rounded-3xl">
                                        <Link to="/profile" className="mr-3 text-white bg-transparent border-2 border-white btn btn-neutral btn-circle hover:text-yellow-400 hover:border-yellow-400 btn-sm"><FaUserLarge /></Link>
                                        <button onClick={logout} className="text-white bg-transparent border-2 border-white rounded-md btn btn-neutral hover:border-yellow-400 hover:text-yellow-400 btn-sm">Logout</button>
                                    </li> : <Link to="/login"><button className="text-gray-600 bg-yellow-400 border-none rounded-md btn btn-neutral hover:text-yellow-400 btn-sm">Login</button></Link>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavWhite;