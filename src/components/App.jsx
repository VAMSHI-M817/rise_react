import React from "react";
import ProfileCard from "./ProfileCard";
import { data } from "./data";
import UseState from "../useState/UseState";
import UseState1 from "../useState/UseState1";

const App = () => {
  let count = 10;
  function handleClick(e, lastname) {
    console.log(e, "my name is " + lastname);
  }
  return (
    <main className="container">
      <UseState1 />
      {/* <ul className="comment-container">
        {data.map((eachObj) => {
          const { id, name, email, body } = eachObj;
          return (
            <ProfileCard
              key={id}
              id={id}
              name={name}
              email={email}
              body={body}
            />
          );
        })}
      </ul>

      <button
        onClick={(e) => {
          return handleClick(e, "Vamshi");
        }}
      >
        Click Me
      </button> */}
    </main>
  );
};

export default App;
