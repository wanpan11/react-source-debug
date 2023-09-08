import React, { useState, useEffect, memo, useCallback } from "react";

const Detail = memo(({ str, click }) => {
  console.log("render ===> Detail");

  return (
    <div style={{ marginBottom: "12px" }}>
      <button onClick={click}>{str}</button>
    </div>
  );
});
Detail.displayName = "Detail";

const App = () => {
  const [data_1, setData_1] = useState(1);

  const click = useCallback(() => {
    console.log("name ===>", 123);
  }, []);

  useEffect(() => {
    console.log("useEffect ===> mount");

    return () => {
      console.log("useEffect ===> return");
    };
  }, []);

  return (
    <div>
      <h1>debugger react</h1>

      <Detail str={"Detail"} click={click} />

      <button onClick={() => setData_1(data_1 + 1)}>update</button>
    </div>
  );
};

export default App;
