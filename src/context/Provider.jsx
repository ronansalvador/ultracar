import React, { useEffect, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Context from './Context';
import tecnicos from '../services/user.json';
import servicos from '../services/services.json';
import pecas from '../services/pecas.json';

console.log(servicos);

function Provider({ children }) {
  const [technical, setTechnical] = useState([]);
  const [services, setServices] = useState(servicos.servicos);
  const [pieces] = useState(pecas);

  const createServices = (newService) => {
    // const objetoJavaScript = JSON.parse(servicos);
    // console.log(objetoJavaScript);
    // console.log('teste');
    const insertService = services;
    insertService.push(newService);
    setServices(insertService);
    console.log(services);
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
  }), [technical, pieces, services]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
