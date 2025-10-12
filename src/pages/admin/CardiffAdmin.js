import React from 'react';

const CardiffAdmin = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Cardiff Admin</h1>
          <p>Cardiff care home administration</p>
        </div>
      </div>
      
      <div className="container">
        <div className="cardiff-admin">
          <h2>Cardiff Care Home Management</h2>
          <div className="admin-sections">
            <div className="admin-section">
              <h3>Resident Management</h3>
              <p>Current residents: 42</p>
              <button className="btn-primary">View Residents</button>
            </div>
            <div className="admin-section">
              <h3>Staff Schedule</h3>
              <p>Today's staff: 18</p>
              <button className="btn-primary">View Schedule</button>
            </div>
            <div className="admin-section">
              <h3>Enquiries</h3>
              <p>Pending: 3</p>
              <button className="btn-primary">View Enquiries</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiffAdmin;