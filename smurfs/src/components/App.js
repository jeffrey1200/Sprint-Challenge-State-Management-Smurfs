import React from "react";
import "./App.css";

import SmurfsForm from "./SmurfsForm";
import SmurfsVillage from "./SmurfsVillage";
import Axios from "axios";

const App = () => {
  Axios.get("http://localhost:3333/smurfs").then(res => console.log(res.data));
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfsVillage />
      <SmurfsForm />
    </div>
  );
};

export default App;
