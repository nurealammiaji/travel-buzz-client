import { useContext } from "react";
import saintmartinCard from "../../assets/Saintmartin.png";
import sreemongolCard from "../../assets/Sreemongol.png";
import sundorbonCard from "../../assets/sundorbon.png";
import { AuthContext } from '../../Providers/Providers';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Home = () => {

    const { backgroundChanger } = useContext(AuthContext);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )

    return (
        <div>
            <br /><br />
            <div className="min-h-screen hero">
                <div className="flex-none md:flex text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div>
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide">
                                <button className="border-4 border-transparent hover:border-yellow-400 rounded-3xl" onClick={() => backgroundChanger("saintmartin")}>
                                    <div className="bg-transparent card">
                                        <figure><img src={saintmartinCard} alt="" /></figure>
                                    </div>
                                </button>
                            </div>
                            <div className="keen-slider__slide">
                                <button className="border-4 border-transparent hover:border-yellow-400 rounded-3xl" onClick={() => backgroundChanger("sreemongol")}>
                                    <div className="bg-transparent card">
                                        <figure><img src={sreemongolCard} alt="" /></figure>
                                    </div>
                                </button>
                            </div>
                            <div className="keen-slider__slide">
                                <button className="border-4 border-transparent hover:border-yellow-400 rounded-3xl" onClick={() => backgroundChanger("sundorbon")}>
                                    <div className="bg-transparent card">
                                        <figure><img src={sundorbonCard} alt="" /></figure>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;