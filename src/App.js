import React, { useState} from 'react'
import ReactJson from 'react-json-view'
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState();
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) return setErrorMsg('Please enter a domain to look up.');
    fetch(`/whois/${query}`)
      .then(response =>{ 
        if(response.ok) return response.json();
        return response.json().then(errObj => {throw new Error(errObj.message.err)});
      })
      .then(data => {
        setErrorMsg('');
        setResult(data);
      })
      .catch(error => {
        console.error(error);
        setResult('');
        setErrorMsg(error.message);
      });
  };

  const handleQueryChange = (event)=>{
    setQuery(event.target.value);
  }

  const handleRemoveErrorMessage = (event)=>{
    setErrorMsg('');
  }

  return (
    <div className='App'>
      <form className='form-container' onSubmit={handleSubmit}>
        <label htmlFor="query">Enter a domain or IP address </label>
        <div className='input-container'>
          <input
            type="text"
            id="query"
            placeholder="ex: google.com"
            value={query}
            onChange={handleQueryChange}
          />
          <button type="submit">Lookup</button>
        </div>
      </form>
      {errorMsg && <div className='error-message'>{errorMsg} <button onClick={handleRemoveErrorMessage}>x</button></div>}
      {result && <ReactJson src={result} theme='harmonic'/>}
    </div>
  )
}

export default App;
