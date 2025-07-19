import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Schedule } from "../types/schedule";

interface UiState {
  isModalOpen: boolean;
  selectedDate: string | null;
  editingSchedule: Schedule | null;
}

const initialState: UiState = {
  isModalOpen: false,
  selectedDate: null,
  editingSchedule: null,
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
      state.selectedDate = null;
      state.editingSchedule = null;
    },
    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setEditingSchedule: (state, action: PayloadAction<Schedule>) => {
      state.editingSchedule = action.payload;
    },
  },
});

export const { openModal, closeModal, selectDate, setEditingSchedule } =
  uiSlice.actions;
export default uiSlice.reducer;
