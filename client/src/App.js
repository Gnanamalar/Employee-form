// src/App.js

import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management Application</h1>
        <EmployeeForm />
      </header>
    </div>
  );
}

export default App;
