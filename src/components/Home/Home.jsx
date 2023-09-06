import { useContext, useState } from "react";
import saintmartinCard from "../../assets/Saintmartin.png";
import sreemongolCard from "../../assets/Sreemongol.png";
import sundorbonCard from "../../assets/sundorbon.png";
import { AuthContext } from '../../Providers/Providers';

const Home = () => {

    const { backgroundChanger } = useContext(AuthContext);

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
                    <div className="max-w-sm md:w-4/12 hero-content hover:border-yellow-400 hover:border-4">
                        <button onClick={() => backgroundChanger("saintmartin")}>
                            <img src={saintmartinCard} alt="" />
                        </button>
                    </div>
                    <div className="max-w-sm md:w-4/12 hero-content">
                        <button onClick={() => backgroundChanger("sreemongol")}>
                            <img src={sreemongolCard} alt="" />
                        </button>
                    </div>
                    <div className="max-w-sm md:w-4/12 hero-content">
                        <button onClick={() => backgroundChanger("sundorbon")}>
                            <img src={sundorbonCard} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;