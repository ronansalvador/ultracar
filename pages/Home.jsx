import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';
import Footer from '../components/Footer';

function Home() {
  const { customer, setCustomer, car, setCar } = useContext(Context);
  const [validData, setValiddata] = useState(false);
  const THREE = 3;
  const navigate = useNavigate();

  const ValidateData = () => {
    setValiddata(customer.length > THREE && car.length > THREE);
  };
  useEffect(() => {
    ValidateData();
  }, [customer, car]);

  const getPassword = () => {
    navigate('/startservice');
  };
  return (
    <>
      <Header />
      <div className="page">
        <h1>Bem-vindo a nossa oficina</h1>
        <h3>
          Informe seu nome, o modelo e a cor do seu carro, retire sua senha
          e aguarde um técnico para dar início ao serviço.
        </h3>
        <form>
          <input
            id="nome-cliente"
            type="text"
            placeholder="Nome:"
            value={ customer }
            onChange={ ({ target }) => setCustomer(target.value) }
          />
          <input
            id="nome-cliente"
            type="text"
            value={ car }
            placeholder="Modelo e cor do carro:"
            onChange={ ({ target }) => setCar(target.value) }
          />
          <button
            type="button"
            onClick={ getPassword }
            disabled={ !validData }
          >
            Retirar senha de espera
          </button>

        </form>

      </div>
      <Footer />
    </>
  );
}

export default Home;
