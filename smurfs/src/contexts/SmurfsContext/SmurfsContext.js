import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { smurfsReducer, types, initialState } from "./state";

const SmurfsContext = createContext();

export const useSmurfsContext = () => useContext(SmurfsContext);

export const SmurfsProvider = ({ children }) => {
  const value = useSmurfsProvider();
  return (
    <SmurfsContext.Provider value={value}>{children}</SmurfsContext.Provider>
  );
};

const useSmurfsProvider = () => {
  const [state, dispatch] = useReducer(smurfsReducer, initialState);

  const fetchSmurfs = () => {
    dispatch({ type: types.FETCH_REQ });

    setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => dispatch({ type: types.FETCH_SECCESS, payload: res.data }))
      .catch((err) => console.error("Error fetching Smurfs: ", err));
    }, 1500);
  };

  const uniqueId = Math.round(Math.random() * 1000000000);

  const addSmurf = (data) => {
    dispatch({ type: types.POST_REQ });
    console.log("adding new smurf: DATA: ", data);
    setTimeout(() => {
    axios
      .post("http://localhost:3333/smurfs", { ...data, id: uniqueId })
      .then((res) => {
        dispatch({
          type: types.POST_SUCCESS,
          payload: { ...data, id: uniqueId },
        });
        console.log("Smurf added successfully", res.data);
      })
      .catch((err) => {
        dispatch({ type: types.POST_FAILED, payload: err });
        console.error("Unable to add new Smurf", err);
      });
    }, 1500);
  };

  const deleteSmurf = (id) => {
    dispatch({ type: types.DELETE_REQ });
    setTimeout(() => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        dispatch({ type: types.DELETE_SUCCESS, payload: id });
        console.log("Successfully deleted Smurf", res.data);
      })
      .catch((err) => {
        dispatch({ type: types.DELETE_FAILED, payload: err });
        console.error("Unable to delete Smurf", err);
      });
    }, 1500);
  };

  return { ...state, fetchSmurfs, addSmurf, deleteSmurf };
};
