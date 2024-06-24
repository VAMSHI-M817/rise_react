import React, { useState } from "react";

const UseState1 = () => {
  const [showData, setData] = useState(true);

  const handleClick = () => {
    setData(!showData);
  };
  return (
    <div>
      <button onClick={handleClick}>{showData ? "Close" : "Show"}</button>
      {showData ? (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum in
            placeat dolor quidem dolore molestiae corrupti voluptatum sit
            provident quia consectetur aliquam nihil eos repudiandae blanditiis,
            dolorum quaerat. Obcaecati, ullam.
          </p>
        </div>
      ) : (
        <div>
          <p>Data is Hidden </p>
        </div>
      )}

      {/* {showData && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab
          laudantium repudiandae nihil neque repellendus vel ipsum aperiam quo
          voluptates sunt maiores optio totam nulla ex accusamus earum,
          accusantium magni.
        </p>
      )}
      <button onClick={handleClick}>{showData ? "Close" : "Show"}</button> */}
    </div>
  );
};

export default UseState1;
