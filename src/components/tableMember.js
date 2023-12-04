import React, { useState, useEffect } from 'react';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
  // Fetch data from the server when the component mounts
  fetch('http://localhost:5000/api/customers')
    .then(response => response.json())
    .then(data => {
      const flattenedData = data.flat();
      console.log('Data from server:', flattenedData);
      setCustomers(flattenedData);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h2>Customer Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Occupation</th>
            <th>Address</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.occupation}</td>
              <td>{customer.address}</td>
              {/* Add more cells for additional columns */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
