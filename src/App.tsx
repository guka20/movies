import React, { useContext } from "react";
import { Loading, LoadingContext } from "./Context/Loading";
import { Routers } from "./Routers/Routers";
import "./styles/index.scss";
function App() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div className="App">
      <Loading>{isLoading ? <h1>Loading...</h1> : <Routers />}</Loading>
    </div>
  );
}

export default App;
