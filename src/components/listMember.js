import React, { useState, useEffect } from 'react';
import AddCustomer from './addMember';
import CustomerTable from './tableMember';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const apiUrl = 'http://localhost:5000/api/customers';

  useEffect(() => {
    // Fetch customer data from the server on component mount
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once on component mount

  const addCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  const handleSendDataToServer = () => {
    fetch('http://localhost:5000/api/send-all-customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customers),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('Data sent to server:', response);
        setSuccessMessage('Data successfully sent to the server.');
      })
      .catch((error) => {
        console.error('Error sending data to server:', error);
        setSuccessMessage('Error sending data to the server.');
      });
  };

  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {Array.isArray(customers) && customers.length > 0 ? (
          customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.phone} - {customer.occupation} - {customer.address} 
            </li>
          ))
        ) : (
          <p>{Array.isArray(customers) ? 'No customers available.' : 'Error: Customers data is not in the expected format.'}</p>
        )}
      </ul>
      <AddCustomer addCustomer={addCustomer} />
      <button onClick={handleSendDataToServer}>Store Data</button>
      <CustomerTable CustomerTable={CustomerTable} />
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default CustomerList;