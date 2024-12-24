import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {ContextProvider }from "./contextApi/context.jsx";
import { CaptainProvider } from "./contextApi/captainContext.jsx";
import 'remixicon/fonts/remixicon.css'
createRoot(document.getElementById("root")).render(
  <CaptainProvider>
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
  </CaptainProvider>
);
