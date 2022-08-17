import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function NameFilter() {
  // const [inputValue, setInputValue] = useState('');
  const { filterPlanetsByName } = useContext(PlanetsContext);

  const handlerInput = ({ target: { value } }) => {
    filterPlanetsByName({ filterByName: { name: value } });
  };

  return <input type="text" onChange={ handlerInput } data-testid="name-filter" />;
}

export default NameFilter;
