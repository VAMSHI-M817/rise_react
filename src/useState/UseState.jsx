import React from "react";
import { useState } from "react";

const UseState = () => {
  const user = {
    firstName: "vamshi",
    lastName: "marepu",
  };

  const [data, setData] = useState(user);

  const handleName = () => {
    setData({ ...data, firstName: "VAMSHI", lastName: "MAREPU" });
  };

  return (
    <div>
      <h1>My First Name is :{data.firstName} </h1>
      <button onClick={handleName}>First Name</button>
      <h1>My Last Name is : {data.lastName} </h1>
    </div>
  );
};

export default UseState;
