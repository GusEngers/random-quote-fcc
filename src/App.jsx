import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuoteAction } from './global-store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuoteAction());
  }, []);

  return (
    <div id='quote-box'>
      <p id="text">Hola</p>
      <p id="author">Autor</p>
      <button id="new-quote">NEW QUOTE</button>
      <a 
        href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Few%20things%20can%20help%20an%20individual%20more%20than%20to%20place%20responsibility%20on%20him%2C%20and%20to%20let%20him%20know%20that%20you%20trust%20him.%22%20Booker%20T.%20Washington"
        id="tweet-quote"
        target='_blank'
        >Twee</a>
    </div>
  );
}

export default App;
