import React from "react";
import styled from "styled-components";
import { useSmurfsContext } from "../contexts/SmurfsContext/SmurfsContext";

const SmurfsList = () => {
  const { smurfs, deleteSmurf } = useSmurfsContext();

  return (
    <Container>
      {smurfs.map((smurf) => {
        return (
          <SmurfCard className="card" key={smurf.id + 1000}>
            <h1>{smurf.name}</h1>
            <div className="property">
              <p>Age:</p>
              <p>{smurf.age}</p>
            </div>
            <div className="property">
              <p>Height:</p>
              <p>{smurf.height}</p>
            </div>
            <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
          </SmurfCard>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

`;

const SmurfCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  min-width: 250px;
  padding: 2rem;
  margin: 1rem;

  border-radius: 10px;
  background-color: white;

  h1 {
    margin-bottom: 0.5rem;
  }

  button {
    width: fit-content;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #81e6d9;
    color: #234e52;
  }

  .property {
    display: flex;
    justify-content: space-between;
    width: 100%;

    p {
      margin: 0.25rem 0;
    }
  }
`;

export default SmurfsList;
