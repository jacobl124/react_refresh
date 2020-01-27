import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Item from "./components/Item/Item";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/item/:id"} component={Item}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
