import React, { useState, useEffect, useLayoutEffect } from "react";

//  useEffect useLayoutEffect

const App = () => {
  const [data_1, setData_1] = useState(1);
  const [data_2] = useState(2);

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("return ===> useEffect");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");

    return () => {
      console.log("return ===> useLayoutEffect");
    };
  }, []);

  const [data_3] = useState(3);

  return (
    <div>
      <div>debugger react</div>

      <div>data_1: {data_1}</div>

      <div>data_2: {data_2}</div>

      <div>data_3: {data_3}</div>

      <button onClick={() => setData_1(data_1 + 1)}>update</button>
    </div>
  );
};

export default App;
