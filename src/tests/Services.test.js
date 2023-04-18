import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste Services', () => {
  test('Verifica se esta na pagina correta', () => {
    renderWithRouter(<App />, { route: '/services' });
    const title = screen.getByRole('heading', { name: /serviços executados/i })
    expect(title).toBeInTheDocument();
    expect(window.location.href).toContain('/services')
  });

  test('Verifica o nome do cliente e o carro do primeiro serviço na tela', () => {
    renderWithRouter(<App />, { route: '/services' });
    const tds = screen.getAllByRole('cell')
    const cliente1 = tds[0];
    const carro1 = tds[1]
    expect(cliente1).toHaveTextContent('Jonathan');
    expect(carro1).toHaveTextContent('Creta preto');
  });
 
 
});