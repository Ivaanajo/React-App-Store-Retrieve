import React, { useState } from 'react';

const AddCustomer = ({ addCustomer }) => {
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    occupation: '',
    address: '',
  });

  const handleChange = (e, ) => {
    const { name, value } = e.target;

    if (name === 'name' || name === 'phone' || name === 'occupation' || name === 'address') 
      // If the field is one of the standard customer details, update the customer object directly
      setCustomer({
        ...customer,
        [name]: value,
      });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(customer);
    // Rest of your code...
  };

  return (
    <div>
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={customer.name} onChange={(e) => handleChange(e, 0)} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={customer.phone} onChange={(e) => handleChange(e, 0)} required />

        <label>Occupation:</label>
        <input type="text" name="occupation" value={customer.occupation} onChange={(e) => handleChange(e, 0)} required />

        <label>Address:</label>
        <input type="text" name="address" value={customer.address} onChange={(e) => handleChange(e, 0)} required />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
