import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const [user] = useContext(UserContext);
  return (
    <div>
      <h3>Profile</h3>
      <h4>{user.username}</h4>
      <h4>{user.password}</h4>
    </div>
  );
};

export default Profile;
