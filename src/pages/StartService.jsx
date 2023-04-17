import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';
import QRCodeComponent from '../components/QRCodeComponent';

function StartService() {
  const { user } = useContext(Context);
  const [cliente] = useState('Ronan');
  const [carro] = useState('Corolla');
  const [starDate, setStartDate] = useState('');
  const [starHour, setStartHour] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endHour, setEndHour] = useState('');
  console.log(user.nome, cliente, carro, starDate, endDate, starHour);

  const startServiceValidate = () => {
    console.log('iniciar atendimento');
    const newService = {
      user: user.id,
      cliente,
      carro,
      starDate,
      starHour,
      endDate,
      endHour,
    };

    console.log(newService);
  };

  return (
    <>
      <Header />
      <div className="start-service-page">
        <h1>Iniciar serviço</h1>
        <QRCodeComponent cliente={ cliente } carro={ carro } />
        <label htmlFor="start-date">
          Data de inicio
        </label>
        <input
          id="start-date"
          type="date"
          onChange={ ({ target }) => setStartDate(target.value) }
        />
        <label htmlFor="start-hour">hora de inicio</label>
        <input
          id="start-hour"
          type="time"
          onChange={ ({ target }) => setStartHour(target.value) }
        />
        <label htmlFor="start-date">
          Termino
        </label>
        <input
          id="end-date"
          type="date"
          onChange={ ({ target }) => setEndDate(target.value) }
        />
        <label htmlFor="start-hour">horario termino</label>
        <input
          id="end-hour"
          type="time"
          onChange={ ({ target }) => setEndHour(target.value) }
        />
        <button
          type="button"
          onClick={ startServiceValidate }
        >
          Iniciar atendimento
        </button>
      </div>
    </>
  );
}

export default StartService;
