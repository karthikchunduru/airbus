import React from 'react';
import aerothon from './aerothon.jpg';
import Iframe from 'react-iframe';
function Home() {
  return (
    <div className='home'>
      <a href="https://assessment.hackerearth.com/challenges/hiring/airbus-aerothon-30/">
        <img src={aerothon}  />
      </a>
      <h1>Home</h1>
      

    </div>
  );
}

export default Home;
