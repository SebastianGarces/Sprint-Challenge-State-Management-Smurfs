import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSmurfsContext } from "../contexts/SmurfsContext/SmurfsContext";

const AddSmurfForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { addSmurf, isPostLoading, error } = useSmurfsContext();

  const onSubmit = (data) => {
    console.log(data);
    addSmurf(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="field-container" >
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" ref={register} />
      </div>
      <div className="field-container">
        <Label htmlFor="age">Age</Label>
        <Input name="age" type="text" ref={register} />
      </div>
      <div className="field-container">
        <Label htmlFor="height">Height</Label>
        <Input name="height" type="text" ref={register} />
      </div>
      <button type="submit">Add</button>
      {isPostLoading && (
        <p style={{ margin: "0.5rem 0" }}>Adding new Smurf... 😁</p>
      )}
      {error && (
        <p style={{ margin: "0.5rem 0" }}>
          Unable to add Smurf 😢 - check console
        </p>
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;

  .field-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 0.5rem 0;
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
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;

  border: none;
  border-radius: 5px;
  background-color: #f3f3f3;
`;

export default AddSmurfForm;
