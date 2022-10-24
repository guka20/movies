import React, { useContext } from "react";
import { Loading, LoadingContext } from "./Context/Loading";
import { Routers } from "./Routers/Routers";
import { Header } from "./components/Header";
import "./styles/index.scss";
function App() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div className="App">
      <Header />
      <Loading>{isLoading ? <h1>Loading...</h1> : <Routers />}</Loading>
    </div>
  );
}

export default App;
