import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "./App.css";
import "./css/home.css";
import "./css/footer.css";
import "./css/navbar.css";
import "./css/services.css";
import "./css/pricing.css";
import "./css/work.css";
import "./css/about.css";
import "./css/contact.css";
import "./css/privacy-policy.css";
import "./css/terms-condition.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
