import React from "react";
import { useState } from "react";

const UseState = () => {
  const USERS = [
    {
      id: "1k3jik3aljadf",
      firstName: "Vamshi",
      lastName: "Marepu",
    },
    {
      id: "2ksdfwoieurw",
      firstName: "Rama",
      lastName: "Krishna",
    },
    {
      id: "2ksdfwoieurw",
      firstName: "Rama",
      lastName: "Krishna",
    },
  ];

  const [data, setData] = useState(USERS);

  const handleDelete = (commingId) => {
    const filterData = data.filter((item) => {
      return item.id != commingId;
    });
    setData(filterData);
  };

  return (
    <section>
      <ul style={{ gap: "1rem" }}>
        {...data.map((eachItem) => {
          const { id, firstName: Fname, lastName: Lname } = eachItem;
          return (
            <li
              style={{
                border: "1px solid black",
                display: "inline-block",
                padding: "1rem",
              }}
            >
              <h2>
                First Name: <span>{Fname}</span>{" "}
              </h2>
              <h2>
                Last Name: <span>{Lname}</span>{" "}
              </h2>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UseState;
