import { Router } from "@router";
import store from "@store/store.ts";
import { defaultTheme, ThemeProvider } from "evergreen-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider value={defaultTheme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
