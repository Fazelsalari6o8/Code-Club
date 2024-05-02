import React from "react";
import ReactDOM from "react-dom/client";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// mui
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";

// components
import App from "./App.jsx";

// styles
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
