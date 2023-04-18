import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeComponent(props) {
  const { cliente, carro } = props;
  const data = { cliente, carro };

  return (
    <QRCode value={ JSON.stringify(data) } />
  );
}

export default QRCodeComponent;
