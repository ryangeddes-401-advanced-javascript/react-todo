import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";

import GlobalContext from './context/global.js';
import Todo from './todo.js';
import Settings from './settings.js';

import Header from './components/header/header.js'

import './styles.scss';

function App() {

  return (
    <Router>    
      <GlobalContext>
        <Header />
        <Route exact path="/about">
          <Settings />
        </Route>
        <Route exact path="/">
          <Todo/>
        </Route>
      </GlobalContext>
    </Router>

  );
}

export default App;
