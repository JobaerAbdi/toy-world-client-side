import {  createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);

const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const updateName = (name)=>{
       return updateProfile(auth.currentUser,{
            displayName : name
        })
    };

    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    };

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    };


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        updateName,
        login,
        logOut,
        signInWithGoogle,
    };
    return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default UserContext;