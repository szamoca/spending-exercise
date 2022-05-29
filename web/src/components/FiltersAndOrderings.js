import React from "react";

import {
  FiltersWrapper,
  Orderings,
  CurrencyFilters,
  CurrencyButton,
} from "../styles/ComponentStyles";

export default function CurrencyFilter({ filter, setOrdering, setFilter }) {
  function handleOrderingChange(e) {
    setOrdering(e.target.value);
  }

  function handleFilterChange(e) {
    setFilter(e.target.name);
  }

  return (
    <>
      <FiltersWrapper>
        <Orderings>
          <select onChange={handleOrderingChange}>
            <option value="-date">Sort by Date descending (default)</option>
            <option value="date">Sort by Date ascending</option>
            <option value="-amount_in_huf">Sort by Amount descending</option>
            <option value="amount_in_huf">Sort by Amount ascending</option>
          </select>
        </Orderings>
        <CurrencyFilters>
          <li>
            <CurrencyButton
              className={filter === "" && "active"}
              name=""
              onClick={handleFilterChange}
            >
              ALL
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              className={filter === "HUF" && "active"}
              name="HUF"
              onClick={handleFilterChange}
            >
              HUF
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              className={filter === "USD" && "active"}
              name="USD"
              onClick={handleFilterChange}
            >
              USD
            </CurrencyButton>
          </li>
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
}
