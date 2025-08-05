import React, { useState } from 'react';

function ProductTable() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Electronics', price: 1200, stock: 30 },
    { id: 2, name: 'Product B', category: 'Clothing', price: 800, stock: 50 },
    { id: 3, name: 'Product C', category: 'Appliances', price: 2500, stock: 15 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ id: null, name: '', category: '', price: '', stock: '' });
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openAddModal = () => {
    setEditMode(false);
    setForm({ id: null, name: '', category: '', price: '', stock: '' });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditMode(true);
    setForm(product);
    setShowModal(true);
  };

  const saveProduct = () => {
    if (editMode) {
      setProducts(products.map(p => (p.id === form.id ? form : p)));
    } else {
      const newProduct = {
        ...form,
        id: products.length + 1,
        price: Number(form.price),
        stock: Number(form.stock)
      };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
    setForm({ id: null, name: '', category: '', price: '', stock: '' });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Product List</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border px-3 py-1 rounded"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={openAddModal}
          >
            Add Product
          </button>
        </div>
      </div>

      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(p => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">₹{p.price}</td>
              <td className="p-3">{p.stock}</td>
              <td className="p-3 space-x-2">
                <button onClick={() => openEditModal(p)} className="px-2 py-1 bg-blue-500 text-white rounded text-sm">Edit</button>
                <button onClick={() => deleteProduct(p.id)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded w-96">
            <h3 className="text-lg font-bold mb-4">{editMode ? "Edit Product" : "Add New Product"}</h3>
            <input
              className="w-full border p-2 mb-2"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
            <input
              className="w-full border p-2 mb-2"
              placeholder="Category"
              name="category"
              value={form.category}
              onChange={handleInputChange}
            />
            <input
              className="w-full border p-2 mb-2"
              placeholder="Price"
              type="number"
              name="price"
              value={form.price}
              onChange={handleInputChange}
            />
            <input
              className="w-full border p-2 mb-4"
              placeholder="Stock"
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleInputChange}
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button onClick={saveProduct} className="px-4 py-2 bg-blue-600 text-white rounded">{editMode ? "Update" : "Add"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductTable;