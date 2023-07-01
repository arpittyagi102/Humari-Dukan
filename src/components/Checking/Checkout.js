import React, { useState } from 'react';
import './Checkout.css';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product2 from '../Products/Product2';

export default function Checkout() {
  const data = useSelector((state) => state);
  const [sortingOption, setSortingOption] = useState(''); // State variable for sorting option

  // Sort function based on the selected option
  function sortProducts(a, b) {
    if (sortingOption === 'price-ascending') {
      return a.cost - b.cost;
    } else if (sortingOption === 'price-descending') {
      return b.cost - a.cost;
    } else if (sortingOption === 'ratings-ascending') {
      return a.rating - b.rating;
    } else if (sortingOption === 'ratings-descending') {
      return b.rating - a.rating;
    } else {
      return 0; // No sorting option selected
    }
  }

  function handleSortOptionChange(event) {
    setSortingOption(event.target.value);
  }

  const sortedData = [...data].sort(sortProducts); // Create a copy of data to avoid mutation

  var total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].cost;
  }
  return (
    <>
      <div
        className="d-flex"
        style={{ alignItems: 'stretch', minHeight: '90vh' }}
      >
        <div className="w-75 container m-5" style={{ width: '60%' }}>
          <Outlet />
        </div>
        <div
          className="w-40 bg-primary p-5"
          data-bs-theme="light"
          style={{ width: '40%' }}
        >
          {/* Sorting dropdown */}
          <div>
            <select value={sortingOption} onChange={handleSortOptionChange}>
              <option value="">Sort By</option>
              <option value="price-ascending">Price Ascending</option>
              <option value="price-descending">Price Descending</option>
              <option value="ratings-ascending">Ratings Ascending</option>
              <option value="ratings-descending">Ratings Descending</option>
            </select>
          </div>
          <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
            {sortedData.map((product) => (
              <Product2
                key={product.id}
                title={product.title}
                image={product.image}
                cost={product.cost}
                type="remove"
              />
            ))}
          </div>
          <div className="d-flex m-4 mt-0">
            <input
              className="form-control form-control my-3"
              data-bs-theme="light"
              placeholder="Gift Card or Discount Code"
            />
            <div className="btn btn-success btn-lg my-3 mx-3">Apply</div>
          </div>
          <div className="d-grid m-4 text-white">
            <div className="row">
              <div className="col"> Subtotal </div>{' '}
              <div className="col ms-auto"> {total} </div>
            </div>
            <div className="row">
              <div className="col"> Shipping </div>{' '}
              <div className="col ms-auto"> Free </div>
            </div>
            <div className="row mt-3">
              <h5 className="col "> TOTAL </h5>{' '}
              <h5 className="col ms-auto "> $ {total} </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
