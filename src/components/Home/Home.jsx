import { useContext } from "react";
import saintmartin from "../../assets/saintmartin.jpg";
import rangamati from "../../assets/rangamati.jpg";
import sreemongol from "../../assets/srimongol.jpg";
import sundorban from "../../assets/sundorban.jpg";
import { AuthContext } from '../../Providers/Providers';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {

    const { backgroundChanger, destination } = useContext(AuthContext);
    const { id, title, details } = destination;

    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })



    return (
        <div>
            <div>
                <div className="min-h-screen hero">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:flex-row">
                        <div className="col-span-1 mt-10 text-center text-white">
                            {
                                (destination) ? <div>
                                    <h1 className="text-5xl font-bold">{title}</h1>
                                    <p className="py-6">{details}</p>
                                    <Link to={`/destination/${id}`}><button className="rounded-md btn btn-warning hover:text-base">Booking <FaArrowRight /></button></Link>
                                    </div> : ""
                            }
                        </div>
                        <div className="w-full col-span-2">
                            <div className="card-body">
                                <div>
                                    <div ref={sliderRef} className="keen-slider">
                                        <div className="keen-slider__slide number-slide1">
                                            <button className="border-4 border-transparent hover:border-yellow-400 rounded-2xl" onClick={() => backgroundChanger(1)}>
                                                <div className="relative bg-transparent card">
                                                    <figure><img className="rounded-2xl" style={{ height: 350, width: 350 }} src={saintmartin} alt="" /></figure>
                                                </div>
                                                <h3 className="absolute pl-2 text-2xl font-extrabold text-white bottom-5">Saintmartin</h3>
                                            </button>
                                        </div>
                                        <div className="keen-slider__slide number-slide2">
                                            <button className="border-4 border-transparent hover:border-yellow-400 rounded-2xl" onClick={() => backgroundChanger(2)}>
                                                <div className="relative bg-transparent card">
                                                    <figure><img className="rounded-2xl" style={{ height: 350, width: 350 }} src={rangamati} alt="" /></figure>
                                                </div>
                                                <h3 className="absolute pl-2 text-2xl font-extrabold text-white bottom-5">Rangamati</h3>
                                            </button>
                                        </div>
                                        <div className="keen-slider__slide number-slide3">
                                            <button className="border-4 border-transparent hover:border-yellow-400 rounded-2xl" onClick={() => backgroundChanger(3)}>
                                                <div className="relative bg-transparent card">
                                                    <figure><img className="rounded-2xl" style={{ height: 350, width: 350 }} src={sreemongol} alt="" /></figure>
                                                </div>
                                                <h3 className="absolute pl-2 text-2xl font-extrabold text-white bottom-5">Sreemongol</h3>
                                            </button>
                                        </div>
                                        <div className="keen-slider__slide number-slide4">
                                            <button className="border-4 border-transparent hover:border-yellow-400 rounded-2xl" onClick={() => backgroundChanger(4)}>
                                                <div className="relative bg-transparent card">
                                                    <figure><img className="rounded-2xl" style={{ height: 350, width: 350 }} src={sundorban} alt="" /></figure>
                                                </div>
                                                <h3 className="absolute pl-2 text-2xl font-extrabold text-white bottom-5">Sundorban</h3>
                                            </button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="text-white md:text-left [&>*]:mx-3">
                                        <button className="btn-circle btn"><FaAngleLeft className="text-2xl" /></button>
                                        <button className="btn-circle btn"><FaAngleRight className="text-2xl" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;