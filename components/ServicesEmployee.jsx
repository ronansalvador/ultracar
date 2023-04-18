import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Select from './Select';
import ShowServices from './ShowServices';

function ServicesEmployee() {
  const { technical, services } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState('');
  const [technicalId, setTechnicalId] = useState(1);

  return (
    <>
      <h1>Serviços por colaborador</h1>
      <form>
        <label htmlFor="start-date">
          Selecione o colaborador
        </label>

        <Select
          setSelected={ setSelectedValue }
          value={ selectedValue }
          options={ technical }
          setId={ setTechnicalId }
        />
      </form>

      { services && <ShowServices
        services={ services.filter((item) => (
          item.user_id === parseInt(technicalId, 10))) }
      />}

    </>
  );
}

export default ServicesEmployee;
