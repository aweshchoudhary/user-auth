import { createContext, useContext, useState } from "react";
import axios from "../Api/base";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const localUser = JSON.parse(localStorage.get("user"));
  if (localUser) {
    setCurrentUser(localUser);
  }
  const register = async (fullName, email, password) => {
    const user = await axios
      .post("/register", { fullName, email, password })
      .then(() => {
        setCurrentUser(user);
        localStorage.set("user", JSON.stringify(user));
      })
      .catch((err) => {
        setAuthError(err);
      });
  };
  const login = async (email, password) => {
    const user = await axios.post("/login", { email, password });
    setCurrentUser(user);
    localStorage.set("user", JSON.stringify(user));
  };
  const value = {
    currentUser,
    register,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
