import { createContext, useContext, useEffect, useState } from "react";
import axios from "../Api/base";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const localUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (localUser) {
      setCurrentUser(localUser);
    }
  }, [localUser]);
  const register = async (fullName, email, password) => {
    const user = await axios
      .post("/register", { fullName, email, password })
      .then(() => {
        setCurrentUser(user.data);
        localStorage.setItem("user", JSON.stringify(user.data));
      })
      .catch((err) => {
        setAuthError(err);
      });
  };
  const login = async (email, password) => {
    const user = await axios.post("/login", { email, password });
    setCurrentUser(user.data);
    localStorage.setItem("user", JSON.stringify(user.data));
  };

  const deleteAccount = async (email, password) => {
    const res = await axios.post("/delete", { email, password });
    setCurrentUser(res);
  };

  const value = {
    currentUser,
    authError,
    register,
    login,
    deleteAccount
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
