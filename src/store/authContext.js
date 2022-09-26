import React, { useState, useEffect } from "react";

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
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const signinHandler = async (email, password) => {
    console.log(email, password);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedisLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedisLoggedIn === "1") {
      setIsLoggedIn(true);
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
