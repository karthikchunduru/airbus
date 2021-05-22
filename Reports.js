import React from 'react';
import crypto from './cryto.png';
function Reports() {
  return (
    <div className='reports'>
       <a href="https://www.coindesk.com/price/dogecoin">
        <img src={crypto}  />
      </a>
      <h1>Reports</h1>
    </div>
  );
}

export default Reports;
