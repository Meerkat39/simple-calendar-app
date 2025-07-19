import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Schedule } from "../types/schedule";

// const initialState: Schedule[] = [];

// ダミーデータを作成
const initialState: Schedule[] = [
  {
    id: nanoid(),
    title: "Reactの勉強会",
    date: "2025-07-20",
    category: "work",
  },
  {
    id: nanoid(),
    title: "歯医者の予約",
    date: "2025-07-20",
    category: "private",
  },
  {
    id: nanoid(),
    title: "懇親会",
    date: "2025-07-20",
    category: "private",
  },
  {
    id: nanoid(),
    title: "新しい予定4", // これを追加
    date: "2025-07-20",
    category: "other",
  },
  {
    id: nanoid(),
    title: "友人とランチ",
    date: "2025-07-22",
    category: "private",
  },
];

export const scheduleSlice = createSlice({
  name: "schedules",
  initialState: initialState,
  reducers: {
    addSchedule: {
      reducer: (state, action: PayloadAction<Schedule>) => {
        state.push(action.payload);
      },
      // actionのpayloadを準備する処理
      prepare: (schedule: Omit<Schedule, "id">) => {
        const id = nanoid();
        return { payload: { id, ...schedule } };
      },
    },
    updateSchedule: (state, action: PayloadAction<Schedule>) => {
      const { id } = action.payload;
      const index = state.findIndex((schedule) => schedule.id === id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteSchedule: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      return state.filter((schedule) => schedule.id !== idToDelete);
    },
  },
});

export const { addSchedule, updateSchedule, deleteSchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
