import "./css/styles.css";
import { Routes, Route } from "react-router-dom";
import User from "./Components/User";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Update from "./Components/Update";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
