import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Providers";

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
                                    className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
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
                                <li className="hover:text-blue-600">
                                    <div className="form-control">
                                        <input type="text" placeholder="Search" className="mx-auto bg-transparent border-white w-52 md:w-auto input input-bordered" />
                                    </div>
                                </li>
                                <li className="hover:text-blue-600">
                                    <NavLink to="/news">News</NavLink>
                                </li>
                                <li className="hover:text-blue-600">
                                    <NavLink to="/destination">Destination</NavLink>
                                </li>
                                <li className="hover:text-blue-600">
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li className="hover:text-blue-600">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                {
                                    (user) ? <li className="text-gray-600 hover:text-blue-600">
                                        <button onClick={logout} className="text-white bg-transparent btn">Logout</button>
                                    </li> : ""
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