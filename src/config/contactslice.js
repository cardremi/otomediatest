import {createSlice} from '@reduxjs/toolkit';

// State awal
const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

// Export actions
export const {createContact, updateContact, deleteContact} =
  contactSlice.actions;

// Export reducer
export default contactSlice.reducer;
