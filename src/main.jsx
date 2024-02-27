import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextMovies from "./context/ContextMovies.js";
import MoviesArray from "./MovieArray.js";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextMovies.Provider value={MoviesArray}>
      <App />
    </ContextMovies.Provider>
  </React.StrictMode>
);
