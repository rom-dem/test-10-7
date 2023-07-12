import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
