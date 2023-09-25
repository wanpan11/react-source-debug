import React, { createContext, useContext, useState } from "react";

const TestContext = createContext({ value: "__init__" });

const Detail_1 = () => {
  const { value } = useContext(TestContext);

  return <button>Detail_1：{value}</button>;
};

const Detail_2 = () => {
  const { value } = useContext(TestContext);

  return <button>Detail_2：{value}</button>;
};

const App = () => {
  const [state, setState] = useState(0);

  return (
    <ul>
      <h1>我是标题呀</h1>

      <TestContext.Provider value={{ value: "update" }}>
        <Detail_1 />
      </TestContext.Provider>

      <Detail_2 />

      <h1 />

      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        setState + 1 = {state}
      </button>
    </ul>
  );
};

export default App;
