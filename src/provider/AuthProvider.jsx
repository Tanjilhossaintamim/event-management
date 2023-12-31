import { createContext, useEffect } from "react";
import PropsTypes from "prop-types";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../utils/firebase";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // gmail and password user create
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin with email && password
  const signInuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };

  // observe user
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => subscribe();
  }, []);

  const allvalues = {
    user,
    registerUser,
    modalOpen,
    setModalOpen,
    modalMessage,
    setModalMessage,
    signInuser,
    googleSignIn,
    logout,
    loading,
  };

  return (
    <AuthContex.Provider value={allvalues}>{children}</AuthContex.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropsTypes.node,
};
export default AuthProvider;
