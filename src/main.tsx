import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Flowbite } from "flowbite-react";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Flowbite>
      <App />
    </Flowbite>
  </StrictMode>
);
