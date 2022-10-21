import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const providerGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const providerGithub = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        signOut(auth);
    }

    const authInfo = { user, providerGoogle, providerGithub, logOut }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;