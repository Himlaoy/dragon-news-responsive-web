import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }

    useEffect(()=>{
       const unSubscription = onAuthStateChanged(auth, loggedUser=>{
            console.log('Logged in user inside the observer', loggedUser)
            setUser(loggedUser)
        })

        return ()=>{
            unSubscription()
        }

    },[])
    

    const userInfo = {
        user,
        createUser,
        signInUser,

    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;