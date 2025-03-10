import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Text from "./Text.jsx";
import Spans from "./Spans.jsx";

const { pathname } = window.location;

let App = Text;
if (pathname === "/spans") {
  App = Spans;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
