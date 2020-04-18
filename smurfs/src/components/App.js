import React from "react";
import "./App.css";

import { useSmurfsContext } from "../contexts/SmurfsContext/SmurfsContext";

import SmurfsList from "./SmurfsList";
import AddSmurForm from "./AddSmurForm";

const App = () => {
  const { fetchSmurfs, isFetchLoading, smurfs, error } = useSmurfsContext();

  console.log('CURRENT STATE: SMURFS: ', smurfs);

  return (
    <div className="App">
      <button
        onClick={fetchSmurfs}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#90CDF4",
          color: "2A4365",
        }}
      >
        Fetch
      </button>
      <AddSmurForm />
      <SmurfsList />
      {isFetchLoading && <h1>Fetching data...😁</h1>}
      {error && <h1>Unable to fetch Smurfs 😢 - check console</h1>}
    </div>
  );
};

export default App;
