import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/ydvdharmendrakr")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);


//you can do this type same as above
const data =useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl py-3">
      <h1> Gihub follwer:{data.name}</h1>
      <h3> Gihub follwer:{data.followers}</h3>
      <h3>{data.bio}</h3>
      <img src={data.avatar_url} alt="dk" />
    </div>
  );
};

export default Github;

export const gitHubinfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/ydvdharmendrakr");
  return res.json();
};
