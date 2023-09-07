import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import saintmartin from "../assets/saintmartin.jpg";
import rangamati from "../assets/rangamati.jpg";
import srimongol from "../assets/srimongol.jpg";
import sundorban from "../assets/sundorban.jpg";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext();

const Providers = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [background, setBackground] = useState(rangamati);
    const [destinations, setDestinations] = useState([]);
    const [destination, setDestination] = useState({id: 2, title: "Rangamati", details: "Rangamati is the place of tea gardens, hills and forest areas on the hills. Within your eyesight you will find green throughout. It is famous for the largest tea gardens of world covered by lush green carpet. One can have a look into the spectacular tea processing at Tea Research Institute. Bangladesh produces and exports a large quantity of high quality tea every year. Most of the tea estates are in Rangamati.  It is also called camellia, green carpet or Tea Mountain."});

    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    const backgroundChanger = (id) => {
        if (id === 1) {
            setBackground(saintmartin);
            infoChanger(id);
        }
        else if (id === 2) {
            setBackground(rangamati);
            infoChanger(id);
        }
        else if (id === 3) {
            setBackground(srimongol);
            infoChanger(id);
        }
        else if (id === 4) {
            setBackground(sundorban);
            infoChanger(id);
        }
    }

    const infoChanger = (id) => {
        const destination = destinations.find(d => d.id === id);
        setDestination(destination);
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const forgot = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        register,
        login,
        googleLogin,
        githubLogin,
        forgot,
        logout,
        background,
        destination,
        backgroundChanger,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;