import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [height, setHeight] = useState(1.5);
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("I'm comming from useEffect");
  //   }, [count, width, height]);
  useEffect(() => {
    console.log("I'm comming from useEffect");
    const resizehandler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizehandler);

    return () => {
      window.removeEventListener("resize", resizehandler);
    };
  }, [width]);

  return (
    <div>
      <h1>The Screen Width is : {width}</h1>
      <button onClick={() => setCount(count - 1)}>- -</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>++</button>
      <h1>second event</h1>
      <button onClick={() => setHeight(height - 1.5)}>- -</button>
      <span>{height}</span>
      <button onClick={() => setHeight(height + 1.5)}>++</button>
    </div>
  );
};

export default UseEffect;
