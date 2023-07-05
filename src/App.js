import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MigrationPopup from './components/MigrationPopup';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <MigrationPopup />
    </div>
  );
};

export default App;

