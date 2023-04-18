import React from 'react';

function Select({ setSelected, value, options, setId }) {
  const handlePiecelId = (event) => {
    setSelected(event.target.value);
    const { selectedIndex } = event.target.options;
    const selectedOption = event.target.options[selectedIndex];
    const selectedId = selectedOption.getAttribute('id');
    setId(selectedId);
  };
  return (
    <select value={ value } onChange={ handlePiecelId }>
      {
        options.map((item) => (
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
  );
}

export default Select;
