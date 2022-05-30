import React from "react";

import {
  FiltersWrapper,
  Orderings,
  CurrencyFilters,
  CurrencyButton,
} from "../styles/ComponentStyles";

export default function CurrencyFilter({ fetchOptions, setFetchOptions }) {
  function handleOrderingChange(e) {
    setFetchOptions({ ...fetchOptions, ordering: e.target.value });
  }

  function handleFilterChange(e) {
    setFetchOptions({ ...fetchOptions, filter: e.target.name });
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
              className={fetchOptions.filter === "" && "active"}
              name=""
              onClick={handleFilterChange}
            >
              ALL
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              className={fetchOptions.filter === "HUF" && "active"}
              name="HUF"
              onClick={handleFilterChange}
            >
              HUF
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              className={fetchOptions.filter === "USD" && "active"}
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
