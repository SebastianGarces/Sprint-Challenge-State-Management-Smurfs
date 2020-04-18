import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { SmurfsProvider } from "./contexts/SmurfsContext/SmurfsContext";

ReactDOM.render(
  <SmurfsProvider>
    <App />
  </SmurfsProvider>,
  document.getElementById("root")
);
