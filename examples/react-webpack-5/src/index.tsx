import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "@component-controls/react-router-integration";

const App = () => {
  const routes = useRoutes();
  return <Router>{routes}</Router>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
