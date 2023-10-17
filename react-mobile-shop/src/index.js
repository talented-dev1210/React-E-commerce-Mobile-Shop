import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// * import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// * import components
import App from "./App/App";

// * import contextAPI
import { ProductProvider } from "./ContextAPI/Context";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);

reportWebVitals();
