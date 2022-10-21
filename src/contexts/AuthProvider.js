import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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

    const createUser = (e, p) => {
        return createUserWithEmailAndPassword(auth, e, p);
    }
    const signIn = (e, p) => {
        return signInWithEmailAndPassword(auth, e, p);
    }

    const logOut = () => {
        signOut(auth);
    }

    const authInfo = { user, providerGoogle, providerGithub, createUser, signIn, logOut }

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