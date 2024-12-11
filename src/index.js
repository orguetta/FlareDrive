import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@shadcn/ui";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
