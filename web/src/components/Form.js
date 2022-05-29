import React, { useState } from "react";
import { InputStyles } from "../styles/InputStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { FormStyles, ErrorMessage } from "../styles/ComponentStyles";
import { addSpending } from "../api/spendings";

export default function Form({ spendings, setSpendings }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    currency: "USD",
  });
  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (errors.length) {
      setErrors([]);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSpending(formData, spendings, setSpendings, setFormData, setErrors);
  }

  return (
    <>
      <FormStyles>
        <InputStyles
          type="text"
          placeholder="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={
            errors.some((error) => error?.missing === "description")
              ? "invalid"
              : ""
          }
        />
        <InputStyles
          type="number"
          placeholder="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className={
            errors.some((error) => error?.missing === "amount") ? "invalid" : ""
          }
        />
        <SelectStyles
          name="currency"
          value={formData.currency}
          onChange={handleChange}
        >
          <option value="HUF">HUF</option>
          <option value="USD">USD</option>
        </SelectStyles>
        <InputStyles type="submit" value="Save" onClick={handleSubmit} />
      </FormStyles>
      {errors.map((error) => (
        <ErrorMessage>{error.message}</ErrorMessage>
      ))}
    </>
  );
}
