import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(0);

  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  useEffect(() => {
    const logIn = localStorage.getItem("logIn");
    if (logIn) {
      setAuthState(true);
    }
  }, []);


  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        formData,
        setFormData,
        total,
        setTotal,
        toggleAuth,
        isAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
