import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material"; // For Material-UI resets
import AppRouter from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <AppRouter />
  </React.StrictMode>
);
