import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App/App";
import reportWebVitals from "./test/reportWebVitals";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
