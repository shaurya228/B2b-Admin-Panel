import React from 'react';

function Orders() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t hover:bg-gray-50">
            <td className="p-3">#1001</td>
            <td className="p-3">John Doe</td>
            <td className="p-3">₹1500</td>
            <td className="p-3 text-green-600 font-semibold">Delivered</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="p-3">#1002</td>
            <td className="p-3">Jane Smith</td>
            <td className="p-3">₹2300</td>
            <td className="p-3 text-yellow-600 font-semibold">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
