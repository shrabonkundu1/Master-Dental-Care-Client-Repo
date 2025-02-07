import React, { useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading]= useState(true);


    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const logInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const unSubscribe  = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('state captured', currentUser?.email)
            if(currentUser?.email){
                const user = {email: currentUser.email}

                axios.post('http://localhost:5000/jwt', user,{withCredentials:true})
                .then(res => {
                    console.log('login:',res.data)
                    setLoading(false)
                })
            }else{
                axios.post('http://localhost:5000/logout', {},{withCredentials:true})
                .then(res => {
                    console.log('logout:', res.data)
                    setLoading(false)
                })
            }
        })
        return () => {
            unSubscribe()
        }
    },[])




    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        logInUser,
        signInWithGoogle,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;