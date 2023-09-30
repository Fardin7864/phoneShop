
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { createContext } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const signUp = ( email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const fardin = {name: 'fardin'}
    const authInfo = {
        signUp,
        fardin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;