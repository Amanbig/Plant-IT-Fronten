import React, { useState } from 'react';

export default function Filters() {
  const [sort, setSort] = useState('relevance');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleSortChange = (value) => {
    setSort(value);
    // Add logic to sort products based on the value
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    // Add logic to filter products based on selected brand
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Add logic to filter products based on selected category
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setPriceRange(value);
    // Add logic to filter products within the selected price range
  };

  return (
    <div className='relative'>
      <button
        className='md:hidden bg-blue-500 text-white px-2 py-1 rounded-sm mb-2 absolute top-2 right-2 z-10'
        onClick={() => setIsFiltersVisible(!isFiltersVisible)}
      >
        {isFiltersVisible ? 'Hide' : 'Filters'}
      </button>

      {/* Filters section */}
      <div
        className={`bg-gray-50 border border-gray-300 p-4 rounded-md w-full max-w-xs md:max-w-full transition-all duration-300 ${
          isFiltersVisible ? 'block' : 'hidden md:block'
        }`}
      >
        <h3 className='p-2 text-xl font-bold border-b border-gray-300'>
          Sort by:
        </h3>
        <div className='flex flex-col space-y-2 mt-2'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='sort'
              value='low-to-high'
              checked={sort === 'low-to-high'}
              onChange={() => handleSortChange('low-to-high')}
              className='mr-2 accent-blue-500'
            />
            Price: Low to High
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='sort'
              value='high-to-low'
              checked={sort === 'high-to-low'}
              onChange={() => handleSortChange('high-to-low')}
              className='mr-2 accent-blue-500'
            />
            Price: High to Low
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='sort'
              value='relevance'
              checked={sort === 'relevance'}
              onChange={() => handleSortChange('relevance')}
              className='mr-2 accent-blue-500'
            />
            Relevance
          </label>
        </div>

        <h3 className='p-2 text-xl font-bold mt-4 border-b border-gray-300'>
          Brand:
        </h3>
        <select
          className='p-2 border border-gray-300 rounded mt-2 w-full'
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value=''>All Brands</option>
          <option value='brand1'>Brand 1</option>
          <option value='brand2'>Brand 2</option>
          <option value='brand3'>Brand 3</option>
        </select>

        <h3 className='p-2 text-xl font-bold mt-4 border-b border-gray-300'>
          Category:
        </h3>
        <select
          className='p-2 border border-gray-300 rounded mt-2 w-full'
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value=''>All Categories</option>
          <option value='clothing'>Clothing</option>
          <option value='footwear'>Footwear</option>
          <option value='accessories'>Accessories</option>
        </select>

        <h3 className='p-2 text-xl font-bold mt-4 border-b border-gray-300'>
          Price Range:
        </h3>
        <input
          type='range'
          min='0'
          max='5000'
          value={priceRange.join(',')}
          onChange={handlePriceChange}
          className='w-full'
          step='100'
        />
        <div className='flex justify-between text-sm mt-1'>
          <span>Rs. {priceRange[0]}</span>
          <span>Rs. {priceRange[1]}</span>
        </div>

        <h3 className='p-2 text-xl font-bold mt-4 border-b border-gray-300'>
          Filters:
        </h3>
        <div className='flex flex-col space-y-2 mt-2'>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2 accent-blue-500' />
            On Sale
          </label>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2 accent-blue-500' />
            In Stock
          </label>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2 accent-blue-500' />
            New Arrivals
          </label>
        </div>
      </div>
    </div>
  );
}
