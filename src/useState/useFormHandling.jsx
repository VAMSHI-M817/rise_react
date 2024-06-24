import React, { useState } from "react";

const Forms = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // METHOD-1
  // const changeFirstname = (e) => {
  //   setfirstName(e.target.value);
  // };

  // const changeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleInputs = (e, name) => {
    //METHOD-2
    // if (name === "firstName") {
    //   setfirstName(e.target.value);
    // } else if (name === "email") {
    //   setEmail(e.target.value);
    // } else if (name === "password") {
    //   setPassword(e.target.value);
    // } else {
    //   console.error("Error in forms");
    // }

    //METHOD-3
    switch (name) {
      case "firstName":
        setfirstName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        console.error("Error in forms vamshi");
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Obj = {
      firstName: firstName,
      email: email,
      password: password,
    };
    console.log(Obj);
  };

  return (
    <section>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            placeholder="Enter your name"
            onChange={(e) => handleInputs(e, "firstName")}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => handleInputs(e, "email")}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => handleInputs(e, "password")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Forms;
