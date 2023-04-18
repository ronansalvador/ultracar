import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste Home', () => {
  test('Ao entrar na aplicação o botão retirar senha esta desabilitado', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /Retirar senha de espera/i });
    expect(button).toBeDisabled();
  });
  test('Ao preencher os dados de nome e carro o botao habilita', () => {
    renderWithRouter(<App />);

       
    const nome = screen.getByPlaceholderText(/nome:/i)
    const carro = screen.getByPlaceholderText(/modelo e cor do carro:/i)
    userEvent.type(nome, 'Ronan');
    userEvent.type(carro, 'Creta prata');
    const button = screen.getByRole('button', { name: /Retirar senha de espera/i });
    expect(button).not.toBeDisabled();
    userEvent.click(button);
    expect(window.location.href).toContain('startservice')
  });
});
