import React, { useEffect, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Context from './Context';
import usuario from '../services/user.json';

function Provider({ children }) {
  const [user, setUser] = useState({});
  console.log(user);

  // mock do usuario que esta utilizando o sistema
  useEffect(() => {
    setUser(usuario[0]);
  }, []);

  const value = useMemo(() => ({
    user,
  }), [user]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
