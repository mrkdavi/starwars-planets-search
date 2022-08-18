import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function Filters() {
  const { filters, addColumn, removeAllFilters } = useContext(PlanetsContext);
  return (
    <div>
      {filters.map((filter, key) => (
        <div key={ key } data-testid="filter">
          <span>
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
          </span>
          <button
            type="button"
            onClick={ () => addColumn(filter.column) }
          >
            excluir
          </button>
        </div>
      )) }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default Filters;
