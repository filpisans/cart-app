import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import ProducList from "./components/ProducList";
import Main from "./components/Product";

//mongoDB: webinacci
//username: webinacci
//pw: !c55webinacc1c55!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ProducList /> */}
    <Main />
  </React.StrictMode>
);
