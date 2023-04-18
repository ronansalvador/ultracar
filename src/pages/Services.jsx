import React, { useContext } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';
// import ServicesEmployee from '../components/ServicesEmployee';
import ShowServices from '../components/ShowServices';
import Footer from '../components/Footer';

function Services() {
  const { services } = useContext(Context);
  return (
    <>
      <Header />
      <div className="page">
        <h1 className="title">Serviços executados</h1>
        { services && <ShowServices services={ services } />}
      </div>
      <Footer />
    </>
  );
}

export default Services;
