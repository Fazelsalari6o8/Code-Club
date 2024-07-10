import React from "react";
import ReactDOM from "react-dom/client";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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
import "./index.css";

// apollo client
const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

// create rtl cache
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, stylisRTLPlugin],
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      {/* <CacheProvider value={cacheRtl}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </CacheProvider> */}
    </BrowserRouter>
  </ApolloProvider>
);
