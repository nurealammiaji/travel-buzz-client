import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import rectangleOne from "../assets/Rectangle1.jpg";
import rectangleTwo from "../assets/Rectangle2.jpg";
import rectangleThree from "../assets/Rectangle3.jpg";
import rectangleFour from "../assets/Rectangle4.png";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext();

const Providers = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [background, setBackground] = useState(rectangleOne);

    const backgroundChanger = (bg) => {
        if (bg === "saintmartin") {
            setBackground(rectangleOne);
        }
        else if (bg === "sreemongol") {
            setBackground(rectangleTwo);
        }
        else if (bg === "sundorbon") {
            setBackground(rectangleThree);
        }
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
        backgroundChanger,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;