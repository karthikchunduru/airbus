import React from 'react';
import Draggable from 'react-draggable';
import './App.css';
import Teams1 from './pages/teams/Teams1';
import Routee from './Routee';
//import Teams from './pages/teams/Teams';
function App() {
  return (
    <div>
      <Draggable>
        <div className='.navigation'>
          <div className='.toggle'>
            <Routee/>
          </div>
        </div>   
      </Draggable> 
    </div>
  );
}

export default App;
