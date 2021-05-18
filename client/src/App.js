import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>
      <div className="form">
        <input type="text" className="name" placeholder="Name" />
        <input type="text" className="review" placeholder="Review" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
