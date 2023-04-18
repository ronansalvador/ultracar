import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste da Login', () => {
  test('Se ao clicar no botão Get Started navega para a /login', () => {
    renderWithRouter(<App />);

  });
});
