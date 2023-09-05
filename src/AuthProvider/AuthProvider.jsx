/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged ,signOut   } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
     
    const singUp=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const singin=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubscrbe=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscrbe()
        }
    },[])

    const ContextInfo={
        user,
        singUp,
        singin,
        logOut,
        loading
    }
    return (
       <AuthContext.Provider value={ContextInfo}>
              {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;