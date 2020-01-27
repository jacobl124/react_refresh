import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Item from "./components/Item/Item";
import List from "./components/List";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemPage from "./components/ItemPage";


function App() {
  return (
    <div className="App">
      <Router>
          <div>
                <Switch>
                    <Route exact path={"/"} component={List}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/item/:id"} component={ItemPage}/>
                </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
