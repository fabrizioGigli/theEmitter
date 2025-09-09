import { router } from "./router/router";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Learn React");

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
