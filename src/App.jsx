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
    <div id='quote-box' className='card mx-auto p-3 mb-2 bg-success-subtle text-success-emphasis text-center' style={{ width: '40rem' }}>
      {error ? (
        <>
          <p id='error' className='fw-bold text-danger fs-3'>{error}</p>
          <button id='new-quote' className='btn btn-success' onClick={() => {dispatch(getQuoteAction());}}>NEW QUOTE</button>
        </>
      ) : (
        <>
          <p id='text' className='fw-bold fs-3'>{loading ? '' : quote.content}</p>
          <p id='author' className='fst-italic'>{loading ? '' : `- ${quote.author} -`}</p>
          <button id='new-quote' className='btn btn-success' onClick={() => {dispatch(getQuoteAction());}}>NEW QUOTE</button>
          {loading ? null : (
            <a href={generateTweet(quote.content, quote.author)} id='tweet-quote' className='btn' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg>
            </a>
          )}
        </>
      )}
    </div>
  );
}

export default App;
