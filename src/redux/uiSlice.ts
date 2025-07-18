import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isModalOpen: boolean;
  selectedDate: string | null;
}

const initialState: UiState = {
  isModalOpen: false,
  selectedDate: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { openModal, closeModal, selectDate } = uiSlice.actions;
export default uiSlice.reducer;
