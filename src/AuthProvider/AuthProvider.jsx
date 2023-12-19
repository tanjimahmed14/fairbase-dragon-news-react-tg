import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../fairbase/fairbase.config";

export const AuthContext = createContext(null);/* auth context eta baire thake jekono jayga theke import kora jay */
const auth = getAuth(app);/* import fairbase auth  */

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);/* user set korar state */
  const [loading, setLoading] = useState(true);


//   at fast createUserWithEmailAndPassword register create ba create user banao
  const createuser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   login ba sing er fairbase signInWithEmailAndPassword 
const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}


// 
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}



//   useEffect jeta dite onAuthStateChanged er user set kora jay
useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
    setLoading(false)
        setUser(currentUser)
        console.log('Set the user', currentUser)
    })
    return unSubscribe;
},[])


  const AuthInfo = {
    user,
    loading,
    createuser,
    logOut,
    singIn
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
