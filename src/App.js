import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import EmployeeTable from './components/EmployeeTable';
import './App.css'

function App() {
  return (
    <body>
      <Navbar/>
      <container>
        <Searchbar/>
        <EmployeeTable/>
      </container>
    </body>
  );
}

export default App;
