import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../components/firebase_int";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [allData, setAllData] = useState()
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const SignOut = ()=>{
    return signOut(auth)
  }

  const UpdateProfile = (updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }

  const [dark, setDark] = useState(false);
    const handleDarkMode = () => {
    setDark(!dark);
    return document.body.classList.toggle("dark");
  };

  useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return()=>{
      unSubcribe()
    }
  })


  const authInfo = {
    SignUp,
    SignIn,
    setUser,
    user,
    UpdateProfile,
    SignOut,
    handleDarkMode,
    dark,
    setAllData,
    allData,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
