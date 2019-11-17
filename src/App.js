import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter className="App">
        <Switch>
          <Route exact path='/' component={LogIn}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
