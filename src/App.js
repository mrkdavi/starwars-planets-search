import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import { PlanetsProvider } from './context/PlanetsContext';

function App() {
  return (
    <PlanetsProvider>
      <NameFilter />
      <NumericFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
