import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [polymers, setPolymers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/search/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setPolymers(data.polymers);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <ul>
          {polymers.map((polymer, index) => (
            <li key={index}>
              {polymer.name} - {polymer.density}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
