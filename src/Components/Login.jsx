import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser, authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  }, [navigate, currentUser]);

  const handleClick = async () => {
    if (!emailRef || !passwordRef) {
      setError("All Fields are required!!");
    } else {
      await login(emailRef.current.value, passwordRef.current.value);
    }
    if (authError) {
      setError(authError);
    }
  };
  console.log(currentUser);

  return (
    <div className="card">
      <div className="top">
        <h1>Login Account</h1>
      </div>
      <div className="body">
        <div className="item">
          <input type="email" placeholder="Enter Your Email" ref={emailRef} />
        </div>
        <div className="item">
          <input
            type="password"
            placeholder="Create a password"
            ref={passwordRef}
          />
        </div>
      </div>
      <div className="bottom">
        <div>
          Don't have an account? <Link to="/register">Register</Link>
        </div>
        <div className="btns">
          <div className="btn" onClick={handleClick}>
            login Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
