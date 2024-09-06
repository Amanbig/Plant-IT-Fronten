// Shop.js
import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import ProductsCard from '../components/ProductsCard';
import Filters from '../components/Filters';

export default function Shop() {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-4 bg-slate-200 p-4'>
          <Filters />
        <div className='col-span-3 flex flex-wrap gap-4 justify-start'>
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
