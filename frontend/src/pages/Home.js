import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      {user ? ( <div>
        <p>All the budget went into the login...this is it.</p>
        <p>JWT decoded email: {user.email}</p>        
        <button onClick={logoutUser}>Logout</button>
        </div>
      )  : (
        <p>Hmmm... you shouldn't be here.</p>
      )}
    </div>
  );
};

export default Home;
