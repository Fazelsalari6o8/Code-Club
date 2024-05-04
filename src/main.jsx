import React from "react";
import ReactDOM from "react-dom/client";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// mui
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";

// emotion
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { prefixer } from "stylis";
// import stylisRTLPlugin from "stylis-plugin-rtl";

// components
import App from "./App.jsx";

// styles
import "./styles/index.css";

// create rtl cache
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, stylisRTLPlugin],
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <CacheProvider value={cacheRtl}> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </CacheProvider> */}
  </BrowserRouter>
  // </React.StrictMode>
);
