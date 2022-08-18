import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('verificar input de pesquisa', async () => {
  render(<App />);
  const nameInput = screen.getByTestId("name-filter");
  userEvent.type(nameInput, 'Tatooine');
  const Tatu = await screen.findByText('Tatooine');
  expect(Tatu).toBeInTheDocument()
})

test('value-filter', async () => {
  render(<App />);
  await screen.findByText('Tatooine');
  const valueFilter = screen.getByTestId("value-filter");
  userEvent.type(valueFilter, '1000000000');
  const buttonFilter = screen.getByTestId("button-filter");
  userEvent.click(buttonFilter);
  const allTrs = screen.getAllByRole('row')
  expect(allTrs.length).toBe(4)
})