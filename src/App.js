import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import CustomerList from './components/listMember';
import AddCustomer from './components/addMember';
import CustomerTable from './components/tableMember';

function App() {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, { id: uuid(), ...customer }]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Customer</Link>
            </li>
            <li>
              <Link to="/display">Display Customer</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
        <Route path="/" element={<CustomerList customers={customers} />} />
        <Route path="/add" element={<AddCustomer addCustomer={addCustomer} />} />
        <Route path="/display" element={<CustomerTable CustomerTable={CustomerTable} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
