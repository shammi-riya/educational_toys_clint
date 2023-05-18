import  { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [users,setUsers] = useState(null)
    const [loaders,setLoaders] = useState(true)


    const createUserWithEmail = (email,password)=>{
        setLoaders(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const login =(email,password)=>{
        setLoaders(false)
       return signInWithEmailAndPassword(auth,email,password)
    }


    const sighinGogool = ()=>{
        setLoaders(false)
     return  signInWithPopup(auth,provider)
    }
  
const AuthUsersInfo ={
    users,
    loaders,
    login,
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