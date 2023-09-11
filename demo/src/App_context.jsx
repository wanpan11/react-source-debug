import React, { memo, createContext, useContext } from "react";

const TestContext = createContext({ value: 0 });

const Detail = memo(() => {
  const { value } = useContext(TestContext);

  return (
    <div style={{ marginBottom: "12px" }}>
      <button>Provider：{value}</button>
    </div>
  );
});
Detail.displayName = "Detail";

const App = () => {
  return (
    <div>
      <h1>Provider</h1>

      <TestContext.Provider value={{ value: 1 }}>
        <Detail />
      </TestContext.Provider>

      <Detail />
    </div>
  );
};

export default App;
