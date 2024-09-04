import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormkContext from "./context/FormkContext.jsx";
import MainContext from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <FormkContext>
        <App />
      </FormkContext>
    </MainContext>
  </StrictMode>
);
