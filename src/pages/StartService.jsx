import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';
import QRCodeComponent from '../components/QRCodeComponent';

function StartService() {
  const { technical, createServices, pieces } = useContext(Context);
  const [cliente] = useState('Ronan');
  const [carro] = useState('Corolla');
  const [starDate, setStartDate] = useState('');
  const [starHour, setStartHour] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endHour, setEndHour] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [technicalId, setTechnicalId] = useState(1);
  const [selectedPiece, setSelectedPiece] = useState('');
  const [pieceId, setPieceId] = useState('');
  const [servicePieces, setServicePieces] = useState([]);
  console.log(user.nome, cliente, carro, starDate, endDate, starHour, pieceId);

  const startServiceValidate = () => {
    // console.log('iniciar atendimento');
    const newService = {
      user_id: technicalId,
      carro,
      cliente,
      data_inicio: starDate,
      hora_inicio: starHour,
      data_termino: endDate,
      hora_termino: endHour,
      pecas: servicePieces,
    };
    console.log(newService);
    createServices(newService);
  };

  function handleTechnicalId(event) {
    console.log(event.target);
    setSelectedValue(event.target.value);
    const { selectedIndex } = event.target.options;
    console.log('selectedIndex', selectedIndex);
    const selectedOption = event.target.options[selectedIndex];
    const selectedId = selectedOption.getAttribute('id');
    console.log('Id selecionado:', selectedId);
    setTechnicalId(parseInt(selectedId, 10));
  }

  function handlePiecelId(event) {
    console.log(event.target);
    setSelectedPiece(event.target.value);
    const { selectedIndex } = event.target.options;
    console.log('selectedIndex', selectedIndex);
    const selectedOption = event.target.options[selectedIndex];
    const selectedId = selectedOption.getAttribute('id');
    console.log('Id selecionado:', selectedId);
    setPieceId(selectedId);
  }

  const addPiece = () => {
    const piece = {
      peca_id: pieceId,
      nome: selectedPiece,
    };
    const pecas = servicePieces;
    pecas.push(piece);
    setServicePieces(pecas);
  };

  useEffect(() => {
    console.log('alterou as pecas');
  }, [servicePieces]);

  return (
    <>
      <Header />
      <div className="page">
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
        <label htmlFor="start-date">
          Responsavel
        </label>
        <select value={ selectedValue } onChange={ handleTechnicalId }>
          {
            technical.map((item) => (
              <option
                id={ item.id }
                key={ item.id }
                value={ item.nome }
              >
                {item.nome}

              </option>
            ))
          }
        </select>
        <select value={ selectedPiece } onChange={ handlePiecelId }>
          {
            pieces.map((item) => (
              <option
                id={ item.id }
                key={ item.id }
                value={ item.nome }
              >
                {item.nome}

              </option>
            ))
          }
        </select>
        <button
          type="button"
          onClick={ addPiece }
        >
          Adicionar peça
        </button>
        {servicePieces.length > 0
          ? servicePieces.map((peca, index) => (
            <p key={ index }>{peca.nome}</p>
          ))
          : <p>Serviço sem peças.</p>}
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
