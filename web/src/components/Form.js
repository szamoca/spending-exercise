import React, { useState } from "react";
import { InputStyles } from "../styles/InputStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { FormStyles, ErrorMessage } from "../styles/ComponentStyles";

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
    fetch(`http://localhost:5000/spendings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const body = await res.json();
        return {
          status: res.status,
          body,
        };
      })
      .then((response) => {
        const resStatus = response.status;
        if (resStatus === 200) {
          setSpendings([...spendings, response.body]);
          setFormData({ ...formData, description: "", amount: 0 });
        } else if (resStatus === 400 || resStatus === 500) {
          setErrors(response.body.errors);
        }
      })
      .catch((err) => {
        console.error(err);
        setErrors([{ message: err.message }]);
      })
      .finally(() => {
        //setLoading(false);
      });
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
