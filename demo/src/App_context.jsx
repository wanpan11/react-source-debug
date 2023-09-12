import React, { createContext, useContext } from "react";

const TestContext = createContext({ value: "@@@" });

const Detail_1 = () => {
  const { value } = useContext(TestContext);

  return <button>Detail_1：{value}</button>;
};

const Detail_2 = () => {
  const { value } = useContext(TestContext);

  return <button>Detail_2：{value}</button>;
};

const App = () => {
  return (
    <ul>
      <h1>我是标题呀</h1>

      <TestContext.Provider value={{ value: "init" }}>
        <Detail_1 />
      </TestContext.Provider>

      <Detail_2 />
    </ul>
  );
};

export default App;
