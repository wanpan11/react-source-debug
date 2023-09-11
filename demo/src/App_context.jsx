import React, { createContext, useContext } from "react";

const TestContext = createContext({ value: 0 });

const Detail_1 = () => {
  const { value } = useContext(TestContext);

  return (
    <span style={{ marginBottom: "12px" }}>
      <button>Provider：{value}</button>
    </span>
  );
};

const Detail_2 = () => {
  const { value } = useContext(TestContext);

  return (
    <span style={{ marginBottom: "12px" }}>
      <button>Provider：{value}</button>
    </span>
  );
};

const App = () => {
  return (
    <ul>
      <h1>Provider</h1>

      <TestContext.Provider value={{ value: 1 }}>
        <Detail_1 />
      </TestContext.Provider>

      <Detail_2 />
    </ul>
  );
};

export default App;
