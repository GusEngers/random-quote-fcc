import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuoteAction } from './global-store/actions';

function App() {
  const { quote, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const generateTweet = (content, author) => `https://twitter.com/intent/tweet?text="${content}" - ${author}`;

  useEffect(() => {
    dispatch(getQuoteAction());
  }, []);

  return (
    <div id='quote-box'>
      {error ? (
        <>
          <p id='error'>{error}</p>
          <button
            id='new-quote'
            onClick={() => {
              dispatch(getQuoteAction());
            }}>
            NEW QUOTE
          </button>
        </>
      ) : (
        <>
          <p id='text'>{loading ? '' : quote.content}</p>
          <p id='author'>{loading ? '' : quote.author}</p>
          <button
            id='new-quote'
            onClick={() => {
              dispatch(getQuoteAction());
            }}>
            NEW QUOTE
          </button>
          <a href={loading ? '#' : generateTweet(quote.content, quote.author)} id='tweet-quote' target='_blank'>
            Tweet
          </a>
        </>
      )}
    </div>
  );
}

export default App;
