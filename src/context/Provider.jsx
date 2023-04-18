import React, { useEffect, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Context from './Context';
import tecnicos from '../services/user.json';
import servicos from '../services/services.json';
import pecas from '../services/pecas.json';

function Provider({ children }) {
  const [technical, setTechnical] = useState([]);
  const [services, setServices] = useState(servicos.servicos);
  const [pieces] = useState(pecas);
  const [customer, setCustomer] = useState('');
  const [car, setCar] = useState('');

  const createServices = (newService) => {
    const insertService = services;
    insertService.push(newService);
    setServices(insertService);
  };

  // mock do usuario que esta utilizando o sistema
  useEffect(() => {
    setTechnical(tecnicos);
  }, []);

  const value = useMemo(() => ({
    technical,
    createServices,
    pieces,
    services,
    customer,
    setCustomer,
    car,
    setCar,
  }), [technical, pieces, services, customer, car]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
