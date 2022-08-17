import { useEffect, useState } from 'react';

const UserPlanetsApi = () => {
  const [planets, setPlanets] = useState([]);
  // const [, setLoading] = useState(false);
  const isLoading = planets.length <= 0;
  useEffect(() => {
    // setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((data) => {
        const planetData = data.results.map((planet) => {
          const { residents, ...restPlanetData } = planet;
          return restPlanetData;
        });
        setPlanets(planetData);
        // setLoading(false);
      });
  }, []);

  return { planets, setPlanets, isLoading };
};

export default UserPlanetsApi;
