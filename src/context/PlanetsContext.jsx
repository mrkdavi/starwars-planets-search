import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserPlanetsApi from '../hooks/UsePlanetsApi';

export const PlanetsContext = createContext();

export function PlanetsProvider({ children }) {
  const { planets } = UserPlanetsApi();
  const [planetsNameFiltered, setPlanetsNameFiltered] = useState([]);
  const [planetsNumericFiltered, setPlanetsNumericFiltered] = useState([]);
  const [thereIsNumericFilter, setThereIsNumericFilter] = useState(false);
  const [filters, setFilters] = useState([]);
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
    console.log('entrei', planetsNumericFiltered, '|', planetsNameFiltered);
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
    const planetsToFilter = thereIsNumericFilter
      ? planetsNumericFiltered
      : planets;
    console.log(planetsToFilter);
    setPlanetsNameFiltered(
      planetsToFilter.filter((planet) => planet.name.includes(filterByName.name)),
    );
  };

  const filterPlanetsNumeric = () => {
    filters.forEach((filter) => {
      const { column, comparison, value } = filter;
      const numericFiltered = planetsNumericFiltered.filter((planet) => {
        if (planet[column] === 'unknown') return false;
        return compare(Number(planet[column]), comparison, value);
      });
      setPlanetsNumericFiltered(numericFiltered);
      setThereIsNumericFilter(true);
    });
  };

  useEffect(() => {
    filterPlanetsNumeric();
  }, [filters]);

  const contextValue = {
    planets: planetsNumericFiltered,
    filterPlanetsByName,
    filterPlanetsNumeric,
    filters,
    setFilters,
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
