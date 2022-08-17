import React from 'react';
import './App.css';
import FilterInput from './components/FilterInput';
import Table from './components/Table';
import { PlanetsProvider } from './context/PlanetsContext';

function App() {
  return (
    <PlanetsProvider>
      <FilterInput />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
