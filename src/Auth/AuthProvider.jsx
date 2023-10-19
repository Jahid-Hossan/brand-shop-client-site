import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [allData, setAllData] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    // popup login
    const popUpGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // password  Sign Up
    const passwordSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // password  login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    const logOut = () => {
        return signOut(auth)
    }

    // state change
    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubs()
        }
    }, [user])

    const data = {
        allData,
        popUpGoogle,
        passwordSignUp,
        handleUpdateUser,
        logIn,
        user,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;