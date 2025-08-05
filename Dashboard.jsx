import React from 'react';
import ProductTable from '../components/ProductTable';

function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Total Products: 124</div>
        <div className="bg-white p-6 rounded shadow">New Orders: 18</div>
        <div className="bg-white p-6 rounded shadow">Revenue: ₹1,24,000</div>
      </div>
      <ProductTable />
    </div>
  );
}

export default Dashboard;