import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="top">
        <h1>User Name</h1>
      </div>
      <div className="body">
        <div className="user-email">Email: user@gmail.com</div>
        <p>
          Your Email is not Verify <Link to="/verify">Verify Now</Link>
        </p>
      </div>
      <div className="bottom">
        <div className="btns">
          <Link to={"/update"} className="btn">
            Update account
          </Link>
          <div className="btn">Logout account</div>
        </div>
      </div>
    </div>
  );
};

export default User;
