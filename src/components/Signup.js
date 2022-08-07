import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserAuthContextProvider";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const {signUp} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
        await signUp(email, password)
        navigate('/')

    } catch (err) {
        setError(err.mesaage)
        console.log(error)
    }
  };

  return (
    <>
      <div className="form">
        <h3>user Signup</h3>
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
              <button onClick={handleSubmit}>Signup</button>
            </div>
          </div>
        </form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </>
  );
};

export default Signup;
