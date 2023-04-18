import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste Start Service', () => {
  test('Ao entrar na pagina o botão retirar senha esta desabilitado', () => {
    renderWithRouter(<App />, { route: '/startservice' });

    const button = screen.getByRole('button', { name: /iniciar atendimento/i });
    expect(button).toBeDisabled();
  });

  test('preenchimento dos campos de data e hora', () => {
    renderWithRouter(<App />, { route: '/startservice' });

    const dataInicio = screen.getByPlaceholderText('data de inicio');
    userEvent.type(dataInicio, '2023-04-18');
    expect(dataInicio).toHaveValue('2023-04-18');

    const horaInicio = screen.getByPlaceholderText('start-hour');
    userEvent.type(horaInicio, '09:00');
    expect(horaInicio).toHaveValue('09:00');

    const dataTermino = screen.getByPlaceholderText('data de inicio');
    userEvent.type(dataTermino, '2023-04-20');
    expect(dataTermino).toHaveValue('2023-04-20');

    const horaTermino = screen.getByPlaceholderText('end-hour');
    userEvent.type(horaTermino, '11:00');
    expect(horaTermino).toHaveValue('11:00');
  });
 
});
