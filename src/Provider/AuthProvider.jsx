import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [users,setUsers] = useState(null)
    const [loaders,setLoaders] = useState(true)


    const createUserWithEmail = (email,password)=>{
        setLoaders(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const login =(email,password)=>{
        setLoaders(true)
       return signInWithEmailAndPassword(auth,email,password)
    }


    const sighinGogool = ()=>{
        setLoaders(true)
     return  signInWithPopup(auth,provider)
    }


   
    useEffect(()=>{
      const unScribe = onAuthStateChanged(auth,currentUser=>{
        setUsers(currentUser);
        setLoaders(false);

      })

      return ()=>{
        return unScribe()
      }
    },[])



    const logOut = () => {
        setLoaders(true);
        return signOut(auth);
    }


  
const AuthUsersInfo ={
    users,
    loaders,
    login,
    logOut,
    sighinGogool,
    createUserWithEmail
}

    return (
        <AuthContext.Provider value={AuthUsersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;