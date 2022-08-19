import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function WebApp() {
  return (
    <BrowserRouter>
      <Routes component={Routes} />
    </BrowserRouter>
  );
}

ReactDOM.render(<WebApp />, document.getElementById("root"));

reportWebVitals();
