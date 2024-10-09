import {configureStore} from '@reduxjs/toolkit';
import contactReducer from './contactslice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
