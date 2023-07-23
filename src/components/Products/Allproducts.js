import React, { useState } from 'react'; 
import Product from './Product';

export default function Allproducts({ data }) {
  const [sortingOption, setSortingOption] = useState(''); // State variable for sorting option

  // Sort function based on the selected option
  function sortProducts(a, b) {
    if (sortingOption === 'price-ascending') {
      return a.price - b.price;
    } else if (sortingOption === 'price-descending') {
      return b.price - a.price;
    } else if (sortingOption === 'ratings-ascending') {
      return a.rating.rate - b.rating.rate;
    } else if (sortingOption === 'ratings-descending') {
      return b.rating.rate - a.rating.rate;
    } else {
      return 0;
    }
  }

  // Handle sorting option change
  function handleSortOptionChange(event) {
    setSortingOption(event.target.value);
  }

  const sortedData = [...data].sort(sortProducts); // Create a copy of data to avoid mutation

  return (
    <>
      <div className="container-fluid mt-4 m-auto">
        <div style={{ textAlign: 'center' }}>
          {/* Sorting dropdown */}
          <select value={sortingOption} onChange={handleSortOptionChange}>
            <option value="">Sort By</option>
            <option value="price-ascending">Price Ascending</option>
            <option value="price-descending">Price Descending</option>
            <option value="ratings-ascending">Ratings Ascending</option>
            <option value="ratings-descending">Ratings Descending</option>
          </select>
        </div>
        <div className="card mt-4">
          {sortedData.map((product) => (
            <Product
              key={product.key}
              id={product.key}
              title={product.title}
              image={product.image}
              cost={product.price}
              description={product.description}
              rating={product.rating}
              category={product.category}
              type={'add'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
