
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    // Create user with email
    const signUp = ( email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    //Create user with google
    const googleProvider = new GoogleAuthProvider();
    // Create user with git-hub
    const gitProvider = new GithubAuthProvider();

    const signUpWithSocial = (Provider) =>{
        return signInWithPopup(auth, Provider)
    }
        // Login with email and password
        // const logIn = () =>{

        // }
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (users) =>{
            setUser(users);
    })
    return () => unsubscribe();
    },[])
    
    // SignOut
    const logOut = () =>{
        return signOut(auth);
    }
// console.log(user)
    // exports on Authcontext
    const authInfo = {
        signUp,
        signUpWithSocial,
        googleProvider,
        gitProvider,
        user,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;