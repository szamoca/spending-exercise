import React, { useState } from "react";
import { InputStyles } from "../styles/InputStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { FormStyles } from "../styles/ComponentStyles";

export default function Form({ spendings, setSpendings }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    currency: "USD",
  });

  function handleChange(e) {
    const { name, value } = e.target;

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
        if (response.status === 200) {
          setSpendings([...spendings, response.body]);
          setFormData({ ...formData, description: "", amount: 0 });
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
          value={formData.description}
          onChange={handleChange}
        />
        <InputStyles
          type="number"
          placeholder="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
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
    </>
  );
}
