import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuoteAction } from './global-store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuoteAction());
  }, []);

  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}

export default App;
