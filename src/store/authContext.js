import React, { useState, useEffect } from "react";
import {
  firebaseSignIn,
  firebaseRegister,
} from "../services/authentication_service";

const AuthContext = React.createContext({
  showModal: false,
  toggleModal: () => {},
  isLoggedIn: false,
  onLogin: async () => {},
  onSignin: async () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const loginHandler = async (email, password) => {
    const user = await firebaseSignIn(email, password);

    const userObj = {
      name: user.name,
      email: user.email,
      uid: user.uid,
      myHabitGroups: user.myHabitGroups,
    };

    localStorage.setItem("userObj", JSON.stringify(userObj));
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const signinHandler = async (email, password, name) => {
    const user = await firebaseRegister(email, password, name);
    console.log(user);
    setShowModal(false);
    setShowModal(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userObj");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    let userObj = localStorage.getItem("userObj");
    if (userObj) {
      userObj = JSON.parse(userObj);
      console.log(userObj?.uid);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        showModal: showModal,
        toggleModal: toggleModal,
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onSignin: signinHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
