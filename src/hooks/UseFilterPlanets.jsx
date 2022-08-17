import { useState } from 'react';

const UseFilterPlanets = (planets, name) => {
  const { planetsFiltered, setPlanetsFiltered } = useState([]);
  setPlanetsFiltered(planets.filter((planet) => planet.name.includes(name)));

  return { planetsFiltered, setPlanetsFiltered };
};

export default UseFilterPlanets;
