import React from "react";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div className="card">
      <div className="top">
        <h1>Update Account</h1>
      </div>
      <div className="body">
        <div className="item">
          <input type="text" placeholder="Enter Your Full Name" />
        </div>
        <div className="item">
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="item">
          <input type="password" placeholder="Enter old password" />
        </div>
        <div className="item">
          <input type="password" placeholder="Enter new password" />
        </div>
      </div>
      <div className="bottom">
        <div className="btns">
          <div className="btn">update Account</div>
          <Link to={"/"} className="btn">
            dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Update;
