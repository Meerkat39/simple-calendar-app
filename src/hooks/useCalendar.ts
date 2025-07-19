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

  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // カレンダーの左上の日（その月の最初の週の日曜日）を計算
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    // startDateからその月の最終日までの日数
    const daysFromStartToMonthEnd = (lastDayOfMonth.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;

    // 必要な週の数を計算（切り上げ）
    let weeksNeeded = Math.ceil(daysFromStartToMonthEnd / 7);

    // カレンダーの表示は通常5週または6週なので、それ以外の場合は調整
    if (weeksNeeded < 5) weeksNeeded = 5; // 4週の月でも5週表示にする（見た目の統一性のため）
    if (weeksNeeded > 6) weeksNeeded = 6; // 7週になることは通常ないが、念のため

    const calendarDays: Date[] = [];
    for (let i = 0; i < weeksNeeded * 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      calendarDays.push(date);
    }

    return { calendarDays, weeksNeeded };
  }, [currentDate]);

  return {
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    calendarGrid: calendarData.calendarDays,
    numberOfWeeks: calendarData.weeksNeeded,
  };
};
