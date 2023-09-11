import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import App from "./App_context";

const root = createRoot(document.getElementById("root"));

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

root.render(<App />);
