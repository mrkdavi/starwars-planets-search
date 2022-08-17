import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function FilterInput() {
  // const [inputValue, setInputValue] = useState('');
  const { onPlanetsFiltered } = useContext(PlanetsContext);

  const handlerInput = ({ target: { value } }) => {
    console.log('enter');
    onPlanetsFiltered({ filterByName: { name: value } });
  };

  return <input type="text" onChange={ handlerInput } data-testid="name-filter" />;
}

export default FilterInput;
