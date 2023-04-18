function ShowServices({ services }) {
  return (

    <table className="tabela">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Carro</th>
          <th>Data inicio</th>
          <th>Hora inicio</th>
          <th>Data termino</th>
          <th>Hora termino</th>
          <th>Peças</th>
        </tr>
      </thead>
      <tbody>
        {services && (services.map((servico, index) => (
          <tr key={ index }>
            <td>{servico.cliente || 'não informado'}</td>
            <td>{servico.carro || 'não informado'}</td>
            <td>{servico.data_inicio}</td>
            <td>{servico.hora_inicio}</td>
            <td>{servico.data_termino}</td>
            <td>{servico.hora_termino}</td>
            <td>
              {servico.pecas.map((pecas, index) => (
                <p
                  key={ index }
                >
                  {`${pecas.nome} - R$:${parseFloat(pecas.valor).toFixed(2)}`}

                </p>))}
            </td>
          </tr>)))}

      </tbody>
    </table>

  );
}

export default ShowServices;
