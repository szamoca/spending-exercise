import React, { useState } from "react";
import { InputStyles } from "../styles/InputStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { FormStyles } from "../styles/ComponentStyles";

export default function Form({ spendings, setSpendings }) {
  const [spending, setSpending] = useState({
    description: "",
    amount: 0,
    currency: "USD",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setSpending({
      ...spending,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/spendings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spending),
    })
      .then(async (res) => {
        const body = await res.json();
        return {
          status: res.status,
          body,
        };
      })
      .then((response) => {
        if (response.status === 200) {
          setSpendings([...spendings, response.body]);
        }
      })
      .catch((err) => {
        console.error(err);
        //setError(true);
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
          value={spending.description}
          onChange={handleChange}
        />
        <InputStyles
          type="number"
          placeholder="amount"
          name="amount"
          value={spending.amount}
          onChange={handleChange}
        />
        <SelectStyles
          name="currency"
          value={spending.currency}
          onChange={handleChange}
        >
          <option value="HUF">HUF</option>
          <option value="USD">USD</option>
        </SelectStyles>
        <InputStyles type="submit" value="Save" onClick={handleSubmit} />
      </FormStyles>
    </>
  );
}
