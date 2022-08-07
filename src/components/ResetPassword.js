import React, { useState } from "react";
import { useAuth } from "../context/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { passwordReset } = useAuth();
  const navigate = useNavigate()

  const passwordResetHandler = (e) => {
    e.preventDefault();
    passwordReset(email);
    navigate('/resetsucces')
  };

  return (
    <>
      <div className="form">
        <h3>RESET PASSWORD</h3>
        <form>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <div>
              <button onClick={passwordResetHandler}>Reset Password</button>
            </div>
          </div>
        </form>
      </div>

      
    </>
  );
};

export default ResetPassword;
