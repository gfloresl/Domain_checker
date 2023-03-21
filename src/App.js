import React, { useState } from "react";
import { DataViewer, Spinner } from "./components/index.js";
import "./App.css";

const App = () => {
  const [result, setResult] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target[0].value;
    if (!query) return setErrorMsg("Please enter a domain to look up.");
    await resetCurrentStateUponFetching();
    fetch(`/whois/${query}`)
      .then((response) => {
        if (response.ok) return response.json();
        return response.json().then((errObj) => {
          throw new Error(errObj.message.err);
        });
      })
      .then((data) => {
        setResult(data.WhoisRecord);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const resetCurrentStateUponFetching = () => {
    setIsFetching(true);
    setErrorMsg("");
    setResult("");
  };

  const handleRemoveErrorMessage = () => {
    setErrorMsg("");
  };

  return (
    <div className="App">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="query">Enter a domain or IP address </label>
        <div className="input-container">
          <input type="text" id="query" placeholder="ex: google.com" />
          <button type="submit" disabled={isFetching}>
            Lookup
          </button>
        </div>
      </form>
      {errorMsg && (
        <div className="error-message">
          {errorMsg}
          <button onClick={handleRemoveErrorMessage} disabled={isFetching}>
            x
          </button>
        </div>
      )}
      {isFetching && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      {result && <DataViewer data={result} />}
    </div>
  );
};

export default App;
