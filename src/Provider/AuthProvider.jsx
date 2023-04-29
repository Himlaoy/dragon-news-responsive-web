import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
       const unSubscription = onAuthStateChanged(auth, loggedUser=>{
            console.log('Logged in user inside the observer', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })

        return ()=>{
            unSubscription()
        }

    },[])
    

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,

    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;