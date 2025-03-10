import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Text from "./Text.jsx";
import Spans from "./Spans.jsx";

const { search } = window.location;
const searchKeys = Array.from(new URLSearchParams(search).keys());

let App = Text;
if (searchKeys.includes("spans")) {
  App = Spans;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
