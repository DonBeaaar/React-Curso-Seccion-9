import React, { useEffect, useState } from "react";
import Message from './Message';
import "./effect.css";
import { useForm } from "../../hooks/useForm";

export const SimpleForm = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formValues;

  return (
    <>
      <h1>Effect</h1>
      <hr />
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="email"
          placeholder="a@gmail.cl"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
        type="password"
          autoComplete="off"
          className="form-control"
          name="password"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      {(name === '123') && <Message />}
    </>
  );
};
export default SimpleForm;
