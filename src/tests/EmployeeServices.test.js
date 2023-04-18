import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Teste Services', () => {
  test('Verifica se esta na pagina correta', () => {
    renderWithRouter(<App />, { route: '/employeeservices' });
    const title = screen.getByRole('heading', { name: /Serviços por colaborador/i })
    expect(title).toBeInTheDocument();
    expect(window.location.href).toContain('/employeeservices')
  });

  test('Verifica o nome do cliente e o carro do primeiro serviço na tela', () => {
    renderWithRouter(<App />, { route: '/employeeservices' });
    const tds = screen.getAllByRole('cell')
    const cliente1 = tds[0];
    const carro1 = tds[1]
    expect(cliente1).toHaveTextContent('Jonathan');
    expect(carro1).toHaveTextContent('Creta preto');
  });

  test('Verifica se ao mudar o colaborar atualiza os serviços', () => {
    renderWithRouter(<App />, { route: '/employeeservices' });
    const tds = screen.getAllByRole('cell')
    const cliente1 = tds[0];
    const carro1 = tds[1]
    expect(cliente1).toHaveTextContent('Jonathan');
    expect(carro1).toHaveTextContent('Creta preto');

    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, 'Fernando');
    expect(select).toBeInTheDocument();
    const tds2 = screen.queryAllByRole('cell');
    expect(tds2).toHaveLength(0);

  });
 
 
});