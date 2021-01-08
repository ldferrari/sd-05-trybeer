import { useEffect, useContext } from 'react';
import TryBeerContext from '../context/TryBeerContext';

export default function useLogin() {
  const context = useContext(TryBeerContext);

  const {
    email, setEmail, password, setPassword,
  } = context;

  // const para validação

  useEffect(() => {
    // const de validação(email, password);
  }, [email, password]);

  if (!context) throw new Error('error XABLAU');

  return {
    email,
    setEmail,
    password,
    setPassword,
  };
}
