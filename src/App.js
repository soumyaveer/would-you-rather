import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LogIn />
    </div>
  );
}

export default App;
