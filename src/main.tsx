import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Flowbite } from "flowbite-react";
import App from "./App.tsx";
import "./index.css";
import { LoginProvider } from "./contexts/Contexts.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Flowbite>
      <LoginProvider>
      <App  />
      </LoginProvider>
    </Flowbite>
  </StrictMode>
);
