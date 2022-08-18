import React from 'react';
import './App.css';
import Filters from './components/Filters';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import { PlanetsProvider } from './context/PlanetsContext';

function App() {
  console.log('renderizei o App');
  return (
    <PlanetsProvider>
      <NameFilter />
      <NumericFilter />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
