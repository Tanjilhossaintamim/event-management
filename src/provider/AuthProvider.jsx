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
  const googleProvider = new GoogleAuthProvider();
  // gmail and password user create
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin with email && password
  const signInuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
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
  };

  return (
    <AuthContex.Provider value={allvalues}>{children}</AuthContex.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropsTypes.node,
};
export default AuthProvider;
