import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const providerGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const providerGithub = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (e, p) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, e, p);
    }
    const signIn = (e, p) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, e, p);
    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }



    const authInfo = {
        user,
        loading,
        setLoading,
        providerGoogle,
        providerGithub,
        createUser,
        updateUser,
        emailVerification,
        signIn,
        logOut
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified) {
                // console.log(currentUser);
                setUser(currentUser);
            }
            setLoading(false);
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