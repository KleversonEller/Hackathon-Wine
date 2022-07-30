import IndexRouter from "./routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <IndexRouter />
    </BrowserRouter>
  );
}

export default App;
