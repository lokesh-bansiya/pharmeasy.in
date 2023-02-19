import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  var isAuth = localStorage.getItem("logIn");

  const toggleAuth = () => {
    localStorage.setItem("isAuth", false);
  };

  useEffect(() => {
    const logIn = localStorage.getItem("logIn");
    if (logIn) {
      isAuth = localStorage.getItem("logIn");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
       isAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
