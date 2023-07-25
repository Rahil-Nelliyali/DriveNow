import React from 'react';
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Welcome to Admin Dashboard</h1>
      <div className="admin-stats">
        <div className="stat">
          <h2>Users</h2>
          <p>Total users: 1000</p>
        </div>
        <div className="stat">
          <h2>Orders</h2>
          <p>Total orders: 500</p>
        </div>
        <div className="stat">
          <h2>Revenue</h2>
          <p>Total revenue: $10,000</p>
        </div>
      </div>
      <div className="admin-features">
        <h2>Features</h2>
        <ul>
          <li>User management</li>
          <li>Order management</li>
          <li>Product management</li>
          <li>Report generation</li>
          {/* Add more features here */}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
