import React from 'react';
import ServicesEmployee from '../components/ServicesEmployee';
import Header from '../components/Header';
import Footer from '../components/Footer';

function EmployeeServices() {
  return (
    <>
      <Header />
      <div className="page">
        <ServicesEmployee />
      </div>
      <Footer />
    </>
  );
}

export default EmployeeServices;
