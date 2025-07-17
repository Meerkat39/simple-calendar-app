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
  },
});

export const { addSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
