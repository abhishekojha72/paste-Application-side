
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    AddToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes)); // Save updated pastes to localStorage
      toast.success('Paste Created Successfully');
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes)); // Save updated pastes to localStorage
        toast.success('Paste Updated');
      }
    },
    resetAllPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes'); // Clear localStorage
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes)); // Save updated pastes to localStorage
        toast.success('Paste Deleted');
      }
    },
  },
});

export const { AddToPastes, updateToPastes, resetAllPaste, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;
