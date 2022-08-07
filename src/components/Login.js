import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserAuthContextProvider";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { logIn, googleSignIn, passwordReset } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const googleLoginHandler = async (e) => {
    e.preventDefault();
    await googleSignIn();
    navigate("/home");
  };

  const passwordResetHandler = () => {
    passwordReset();
  };

  return (
    <>
      <div className="form">
        <h3>user Login</h3>
        {error && error.message}
        <form>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <div>
              <button onClick={loginHandler}>Login</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <GoogleButton onClick={googleLoginHandler} />
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <div className="p-4 box mt-3 text-center" onClick={passwordResetHandler}>
        Forgot your password? <Link to='/reset'>Reset password</Link>
      </div>
    </>
  );
};

export default Login;
