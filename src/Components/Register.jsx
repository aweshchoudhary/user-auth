import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Register = () => {
  const [error, setError] = useState(null);
  const { register, currentUser, authError } = useAuth();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  console.log(currentUser);
  const handleClick = async () => {
    if (!fullNameRef || !emailRef || !passwordRef) {
      setError("All Fields are required!!");
    } else {
      await register(
        fullNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    }
    if (authError) {
      setError(authError);
    }
  };

  return (
    <div className="card">
      <div className="top">
        <h1>Create An Account</h1>
        <p className="error">{error ? error : null}</p>
      </div>
      <div className="body">
        <div className="item">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            ref={fullNameRef}
          />
        </div>
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
          Already have an account? <Link to="/login">Login</Link>
        </div>
        <div className="btns">
          <div className="btn" onClick={handleClick}>
            Create Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
