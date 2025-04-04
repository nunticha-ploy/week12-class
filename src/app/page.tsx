"use client"
import React, { useState } from 'react';
import axios from 'axios';

function SubmitForm() {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', { content: data })
      .then(response => setResponse(response.data))
      .catch(error => console.error('Error posting data:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter data"
        />
        <button type="submit">Clik here to Submit</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default SubmitForm;
