import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';
import QRCodeComponent from '../components/QRCodeComponent';
import Select from '../components/Select';
import Footer from '../components/Footer';

function StartService() {
  const { technical, createServices, pieces, customer, car } = useContext(Context);
  const [starDate, setStartDate] = useState('');
  const [starHour, setStartHour] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endHour, setEndHour] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [technicalId, setTechnicalId] = useState(1);
  const [selectedPiece, setSelectedPiece] = useState('peça1');
  const [pieceId, setPieceId] = useState('');
  const [servicePieces, setServicePieces] = useState([]);
  const [validService, setValidService] = useState(false);
  const navigate = useNavigate();

  const startServiceValidate = () => {
    const newService = {
      user_id: parseInt(technicalId, 10),
      carro: car,
      cliente: customer,
      data_inicio: starDate,
      hora_inicio: starHour,
      data_termino: endDate,
      hora_termino: endHour,
      pecas: servicePieces,
    };
    createServices(newService);
    navigate('/services');
  };

  const addPiece = () => {
    const pieceValue = pieces.filter((peca) => peca.nome === selectedPiece);
    const piece = {
      peca_id: pieceId,
      nome: selectedPiece,
      valor: pieceValue[0]?.valor || 0,
    };

    const newPecas = [...servicePieces, piece];

    setServicePieces(newPecas);

  };

  const validateService = () => {
    setValidService(starDate && starHour && endDate && endHour);
  };
  useEffect(() => {
    validateService();
  }, [starDate, starHour, endDate, endHour]);

  return (
    <>
      <Header />
      <div className="page">
        <h1>Iniciar serviço</h1>
        <QRCodeComponent cliente={ customer } carro={ car } />
        <form>

          <label htmlFor="start-date">
            Data de inicio
          </label>
          <input
            id="start-date"
            type="date"
            placeholder='data de inicio'
            onChange={ ({ target }) => setStartDate(target.value) }
          />
          <label htmlFor="start-hour">hora de inicio</label>
          <input
            id="start-hour"
            type="time"
            placeholder='start-hour'
            onChange={ ({ target }) => setStartHour(target.value) }
          />
          <label htmlFor="start-date">
            Termino
          </label>
          <input
            id="end-date"
            type="date"
            placeholder='data de termino'
            onChange={ ({ target }) => setEndDate(target.value) }
          />
          <label htmlFor="start-hour">horario termino</label>
          <input
            id="end-hour"
            type="time"
            placeholder='end-hour'
            onChange={ ({ target }) => setEndHour(target.value) }
          />
          <label htmlFor="start-date">
            Responsavel
          </label>
          <Select
            setSelected={ setSelectedValue }
            value={ selectedValue }
            options={ technical }
            setId={ setTechnicalId }
          />
          <Select
            setSelected={ setSelectedPiece }
            value={ selectedPiece }
            options={ pieces }
            setId={ setPieceId }
          />
          <button
            type="button"
            onClick={ addPiece }
          >
            Adicionar peça
          </button>
          {servicePieces.length > 0
            && servicePieces.map((peca, index) => (
              <p
                key={ index }
              >
                {`${peca.nome} - R$:${parseFloat(peca.valor).toFixed(2)}`}

              </p>
            ))}

          <button
            type="button"
            onClick={ startServiceValidate }
            disabled={ !validService }
          >
            Iniciar atendimento
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default StartService;
