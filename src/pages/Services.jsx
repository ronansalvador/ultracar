import React, { useContext } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';
import ServicesEmployee from '../components/ServicesEmployee';

function Services() {
  const { services } = useContext(Context);
  console.log(services);
  return (
    <>
      <Header />
      <div className="page">
        <h1>serviços geral</h1>
        {services.length > 0 ? (
          services.map((servico, index) => (
            <p key={ index }>{servico.cliente}</p>
          ))
        ) : (
          ''
        )}
        <ServicesEmployee />
      </div>
    </>
  );
}

export default Services;
