import React,{useState} from 'react'
import './style.css'
import axios from 'axios'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/Signup'
import Search from './components/Search'
function App() {
    return (
        <Router>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route  path="/search">
          <Search/>
        </Route>
        </Router>
    )
}

export default App
