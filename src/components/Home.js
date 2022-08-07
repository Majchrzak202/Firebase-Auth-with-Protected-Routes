import React from "react";
import { useAuth } from "../context/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
        await logOut()
        navigate('/')
    } catch (err) {
        console.log(err.message)
    }
  }

  return (
    <>
      <div>
        Hello welcome <br />
        {user && user.email}
      </div>
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default Home;
