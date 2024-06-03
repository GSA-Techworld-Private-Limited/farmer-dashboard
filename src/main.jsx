import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextStore } from "./components/context/ContextStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextStore>
      <App />
    </ContextStore>
  </React.StrictMode>
);
