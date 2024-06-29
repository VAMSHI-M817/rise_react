import { useState, useEffect } from "react";
import "./CockTail.css";

const CockTailFetching = () => {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [searchInput, setSearchInput] = useState("");
  const [cockTails, setCocktails] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    msg: "",
  });
  const [newInput, setNewInput] = useState({
    text: "",
    id: "",
  });

  const fetchedData = async (apiURL) => {
    setLoading(true);
    try {
      const response = await fetch(apiURL);
      const { drinks } = await response.json();
      setCocktails(drinks);
      setLoading(false);
      setIsError({ status: false, msg: "" });

      if (!drinks) {
        throw new Error("OOPS! Data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    const NEW_API = `${URL}${newInput.text}`;
    fetchedData(NEW_API);
  }, [newInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSearch = {
      id: new Date().getTime().toString(),
      text: searchInput,
    };
    setNewInput(newSearch);
  };

  return (
    <section onSubmit={handleSubmit}>
      <div className="main-container">
        <form autoComplete="off">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Here"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <br />
        <hr />
        {Loading && <h2>Loading . . . .</h2>}
        {isError?.status && <h2 style={{ color: "red" }}>{isError?.msg}</h2>}
        {!Loading && !isError?.status && (
          <section>
            <ul className="cocktail-data">
              {cockTails.map((eachItem) => {
                const { idDrink, strDrink, strDrinkThumb } = eachItem;
                return (
                  <li key={idDrink}>
                    <div>
                      <img src={strDrinkThumb} alt="strDrink" />
                      <h4>{strDrink}</h4>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </section>
  );
};

export default CockTailFetching;
