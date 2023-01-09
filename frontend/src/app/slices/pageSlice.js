import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPages: (state, action) => {
      state = action.payload;
      return state;
    },
    togglePage: (state, action) => {
      const pageId = action.payload;
      state[pageId].isOpen = !state[pageId].isOpen;
      return state;
    },
    setNoteList: (state, action) => {
      const { page, note } = action.payload;
      state[page].notes = note;
      return state;
    },
    addNote: (state, action) => {
      const note = action.payload;
      state[note.page].notes.push(note);
      return state;
    },
    reset: (state, action) => {
      return initialState;
    }
  },
});

export const { setPages, togglePage, setNoteList, addNote, reset } = pageSlice.actions;
export default pageSlice.reducer;
