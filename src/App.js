
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './screen/Home';
import News from './screen/News';
import About from './screen/About';
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
      <div className="App">
      <div className="Header">
        <div className="Title">
          React Project
        </div>
        <div className="First_Header">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/News">News</Link></div>
          <div><Link to="/About">About</Link></div>
          
     </div>
     </div>
     <Switch>
       <Route path="/"exact={true}component={Home}/>
       <Route path="/News"component={News}/>
       <Route path="/About" component={About}/>
       
    </Switch>
      </div>
  </BrowserRouter>
        </div>
    
    </div> 
  );
}

export default App;
