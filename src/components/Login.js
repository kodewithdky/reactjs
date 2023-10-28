import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [user,setUser] = useContext(UserContext);
  const [username, setusrName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username,
      password,
    });
  };
  return (
    <div className="block items-center">
      <h3 className=" text-center">Login</h3>
      <input
        value={username}
        onChange={(e) => setusrName(e.target.value)}
        type="email"
        placeholder="enter email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="enter password"
      />
      <button onClick={handleSubmit}>Submint</button>
    </div>
  );
};

export default Login;
