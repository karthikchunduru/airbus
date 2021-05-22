import React from 'react';
import Navbar from './../components/Navbar';
import {Link} from 'react-router-dom';
import MobileProduct from './Mobileproduct.jpeg';
function Products() {
  return (
    <div className='products'>
      <a href="https://www.flipkart.com/redmi-note-5-pro-black-64-gb/p/itmf2fc3xgmxnhpx?cmpid=product.share.pp&lid=LSTMOBF28FTQPHUPX83H7IIOZ&pid=MOBF28FTQPHUPX83">
        <img src={MobileProduct}  />
      </a>
      {/* </Link> */}
      {/* <h1>Products</h1> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default Products;
