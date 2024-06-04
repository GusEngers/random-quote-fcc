import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_QUOTE } from './constants';

const getQuoteAction = createAsyncThunk(GET_QUOTE, async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://api.quotable.io/quotes/random');
    const data = await response.json();
    return data[0];
  } catch (_) {
    return rejectWithValue('Sorry! Try again');
  }
});

export { getQuoteAction };
