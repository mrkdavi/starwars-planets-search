import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const NumericFilter = () => {
  const { columns, filterPlanetsNumeric } = useContext(PlanetsContext);

  const [column, setColumn] = useState(columns[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const resetInputs = () => {
    setValue(0);
  };

  const handlerButton = () => {
    filterPlanetsNumeric({
      filterByNumericValues: {
        column,
        comparison,
        value: Number(value),
      },
    });
    resetInputs();
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columns.map((columnName, key) => (
          <option key={ key } value={ columnName }>
            {columnName}
          </option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        value={ value }
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <input
        type="button"
        value="Filtrar"
        onClick={ handlerButton }
        data-testid="button-filter"
      />
    </div>
  );
};

export default NumericFilter;
