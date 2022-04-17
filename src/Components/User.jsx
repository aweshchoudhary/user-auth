import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import axios from "../Api/base";

const User = () => {
  const { currentUser, deleteAccount } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [navigate, currentUser]);

  const handleClick = async () => {
    const res = await axios(`/verify/${currentUser.confirmationCode}`);
    console.log(res);
  };
  const handleDelete = async () => {
    await deleteAccount(currentUser.email, currentUser.password);
  };

  return (
    <div className="user">
      <div className="top">
        <h1>{currentUser?.fullName}</h1>
      </div>
      <div className="body">
        <div className="user-email">Email: {currentUser?.email}</div>
        {currentUser ? (
          <p>
            Your Email is not Verify{" "}
            <div className="btn" onClick={handleClick}>
              Verify Now
            </div>
          </p>
        ) : null}
      </div>
      <div className="bottom">
        <div className="btns">
          <Link to={"/update"} className="btn">
            Update
          </Link>
          <div className="btn" onClick={handleDelete}>
            delete{" "}
          </div>
          <div className="btn">Logout </div>
        </div>
      </div>
    </div>
  );
};

export default User;
