export function getSpendings(successCallback, errorCallback, loadingCallback) {
  return fetch(`http://localhost:5000/spendings`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
        successCallback(response.body);
      }
    })
    .catch((err) => {
      console.error(err);
      errorCallback(true);
    })
    .finally(() => {
      loadingCallback(false);
    });
}

export function addSpending(
  formData,
  spendings,
  setSpendings,
  setFormData,
  setErrors
) {
  return fetch(`http://localhost:5000/spendings`, {
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
