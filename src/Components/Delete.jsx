import react, { useRef } from "react";

const Delete = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="card">
      <div className="top">
        <h1>Delete Account</h1>
      </div>
      <div className="body">
        <div className="item">{}</div>
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

export default Delete;
