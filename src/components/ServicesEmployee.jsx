import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function ServicesEmployee() {
  const { technical, services } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState('');
  const [technicalId, setTechnicalId] = useState(1);

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

  return (
    <>
      <h1>ServicesEmployee</h1>
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

      {
        services.filter((item) => item.user_id === technicalId)
          .map((service, index) => <p key={ index }>{ service.cliente }</p>)
      }

    </>
  );
}

export default ServicesEmployee;
