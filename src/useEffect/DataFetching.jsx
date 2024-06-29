import React from "react";
import { useState, useEffect } from "react";
import "./DataFetch.css";

const DataFetching = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    msg: "",
  });

  const fetchData = async (apiUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUserData(data);
      setIsLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("Data not found");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong try again",
      });
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading. . . . .</h2>
      </div>
    );
  }

  if (isError?.status) {
    return (
      <div>
        <h2>{isError?.msg}</h2>
      </div>
    );
  }

  return (
    <section>
      <div>
        <h1>User data</h1>
        <ul>
          {userData.map((eachItem) => {
            const { id, name, email } = eachItem;
            return (
              <li key={id}>
                <div>{name}</div>
                <div>{email}</div>
              </li>
            );
          })}
        </ul>

        <table>
          <thead>
            <tr>
              <th>UID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((eachUser) => {
              const { id, name, email, phone, website } = eachUser;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataFetching;

// const URL = "https://jsonplaceholder.typicode.com/users";
// const [userData, setUserData] = useState([]);
// const [Loading, setLoading] = useState(false);
// const [isError, setIsError] = useState({
//   status: false,
//   msg: "",
// });

// const fetchData = async (apiUrl) => {
//   setLoading(true);
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     setUserData(data);
//     setLoading(false);
//     setIsError({
//       status: false,
//       msg: "",
//     });
//     if (response.status === 404) {
//       throw new Error("Data not found");
//     }
//   } catch (error) {
//     setLoading(false);
//     setIsError({
//       status: true,
//       msg: error.message || "Something went wrong try again!",
//     });
//   }
// };

// useEffect(() => {
//   fetchData(URL);
// }, []);

// if (Loading) {
//   return (
//     <div>
//       <h1 style={{ color: "green" }}>Loading.......</h1>
//     </div>
//   );
// }
// if (isError?.status) {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>{isError?.msg}</h1>
//     </div>
//   );
// }

// return (
//   <section>
//     <div>
//       <h1>Users Data</h1>
//       <ul>
//         {userData.map((eachItem) => {
//           const { id, name, email } = eachItem;
//           return (
//             <li key={id}>
//               <div>{name}</div>
//               <div>{email}</div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   </section>
// );
