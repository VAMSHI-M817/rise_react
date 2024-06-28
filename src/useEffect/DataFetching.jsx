import React from "react";
import { useState, useEffect } from "react";

const DataFetching = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({
    status:false,
    msg:""
  });

  const fetchData = async (apiUrl) => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.log("error with data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  if (Loading) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  }
  return (
    <section>
      <div>
        <h1>Users Data</h1>
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
      </div>
    </section>
  );
};

export default DataFetching;
