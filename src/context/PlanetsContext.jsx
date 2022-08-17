import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import UserPlanetsApi from '../hooks/UsePlanetsApi';

export const PlanetsContext = createContext();

export function PlanetsProvider({ children }) {
  const { planets } = UserPlanetsApi();
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [name, setName] = useState('');

  const onPlanetsFiltered = ({ filterByName }) => {
    setName(filterByName.name);
    setPlanetsFiltered(
      planets.filter((planet) => planet.name.includes(filterByName.name)),
    );
  };

  const getPlanets = name ? planetsFiltered : planets;

  return (
    <PlanetsContext.Provider value={ { planets: getPlanets, onPlanetsFiltered } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
