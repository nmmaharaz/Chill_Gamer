import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../components/firebase_int";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forgetEmail, setForgetEmail] = useState("");
  const SignUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const UpdateProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const [dark, setDark] = useState(false);
  const handleDarkMode = () => {
    setDark(!dark);
    return document.body.classList.toggle("dark");
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  });

  const authInfo = {
    SignUp,
    SignIn,
    setUser,
    user,
    UpdateProfile,
    SignOut,
    handleDarkMode,
    dark,
    forgetEmail,
    setForgetEmail,
    forgetPassword,
    resetPassword,
    loading,
    setLoading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
