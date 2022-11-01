import React from "react";
import { Routers } from "./Routers/Routers";
import { Header } from "./components/Header";
import "./styles/index.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
    </div>
  );
}

export default App;
