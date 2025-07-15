import { useMemo, useState } from "react";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const calendarGrid = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // カレンダーの左上の日の計算
    const startDate = new Date(year, month, 1);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const calendarDays = [];
    for (let i = 0; i < 7 * 6; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      calendarDays.push(date);
    }

    return calendarDays;
  }, [currentDate]);

  return {
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    calendarGrid,
  };
};
