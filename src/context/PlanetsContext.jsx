import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserPlanetsApi from '../hooks/UsePlanetsApi';

export const PlanetsContext = createContext();

export function PlanetsProvider({ children }) {
  const { planets } = UserPlanetsApi();
  const [planetsNameFiltered, setPlanetsNameFiltered] = useState([]);
  const [planetsNumericFiltered, setPlanetsNumericFiltered] = useState([]);
  const [, setThereIsNumericFilter] = useState(false);
  const [columns] = useState([
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ]);

  useEffect(() => {
    setPlanetsNameFiltered(planets);
  }, [planets]);
  useEffect(() => {
    setPlanetsNumericFiltered(planetsNameFiltered);
  }, [planetsNameFiltered]);

  const compare = (columnValue, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return columnValue > value;
    case 'menor que':
      return columnValue < value;
    default:
      return columnValue === value;
    }
  };

  const filterPlanetsByName = ({ filterByName }) => {
    console.log(filterByName);
    setPlanetsNameFiltered(
      planets.filter((planet) => planet.name.includes(filterByName.name)),
    );
  };

  const filterPlanetsNumeric = ({ filterByNumericValues }) => {
    const { column, comparison, value } = filterByNumericValues;
    const numericFiltered = planetsNameFiltered.filter((planet) => {
      if (planet[column] === 'unknown') return false;
      return compare(Number(planet[column]), comparison, value);
    });
    setPlanetsNumericFiltered(numericFiltered);
    setThereIsNumericFilter(true);
  };

  const contextValue = {
    planets: planetsNumericFiltered,
    filterPlanetsByName,
    filterPlanetsNumeric,
    columns,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
