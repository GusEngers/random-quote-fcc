import { createReducer } from '@reduxjs/toolkit';
import { getQuoteAction } from './actions';

const defaultState = {
  quote: null,
  loading: true,
  error: null,
};

const rootReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(getQuoteAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.quote = null;
    })
    .addCase(getQuoteAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.quote = action.payload;
    })
    .addCase(getQuoteAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.quote = null;
    })
    .addDefaultCase((state) => state);
});

export default rootReducer;
