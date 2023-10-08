import { createContext } from "react";
import PropsTypes from "prop-types";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const allvalues = {
    user,
    registerUser,
    modalOpen,
    setModalOpen,
    modalMessage,
    setModalMessage,
  };

  return (
    <AuthContex.Provider value={allvalues}>{children}</AuthContex.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropsTypes.node,
};
export default AuthProvider;
