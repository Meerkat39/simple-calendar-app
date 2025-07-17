export type ScheduleCategory = "work" | "private" | "other";

export interface Schedule {
  id: string;
  title: string;
  date: string;
  startTime?: string;
  endTime?: string;
  category: ScheduleCategory;
  description?: string;
}

