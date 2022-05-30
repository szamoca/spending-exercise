import React, { useState } from "react";
import Form from "./components/Form";
import FiltersAndOrderings from "./components/FiltersAndOrderings";
import SpendingList from "./components/SpendingList";
import Layout from "./components/Layout";

export default function App() {
  const [spendings, setSpendings] = useState([]);
  const [fetchOptions, setFetchOptions] = useState({
    ordering: "-date",
    filter: "",
  });

  return (
    <>
      <Layout>
        <Form spendings={spendings} setSpendings={setSpendings} />
        <FiltersAndOrderings
          fetchOptions={fetchOptions}
          setFetchOptions={setFetchOptions}
        />
        <SpendingList
          spendings={spendings}
          fetchOptions={fetchOptions}
          setSpendings={setSpendings}
        />
      </Layout>
    </>
  );
}
