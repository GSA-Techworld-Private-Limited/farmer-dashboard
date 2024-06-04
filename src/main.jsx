import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextStore } from "./components/context/ContextStore.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextStore>
        <App />
      </ContextStore>
    </BrowserRouter>
  </React.StrictMode>
);
