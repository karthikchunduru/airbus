import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Draggable from 'react-draggable';
import Chat from './pages/Chat';
import GamificationA from './components/games/GamificationA';
import Teams1 from './pages/teams/Teams1';
function Routee() {
  return (
    <Draggable>
    <>
      <Router>
      <Navbar />
        <Switch>
        {/* <Draggable>
        <Route path='/Homee' exact component={Navbar}/>
        </Draggable> */}
        <Route path='/Home' exact component={Home} />
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
        <Route path='/Chatbot' component={Chat} />
        <Route path='/Gamification' component={GamificationA} />
        <Route path='/team' component={Teams1} />
        
        </Switch>
        
      </Router>
      
    </>
     </Draggable>
  );
}

export default Routee;
