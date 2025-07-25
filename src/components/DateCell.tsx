import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { openModal, selectDate, setEditingSchedule } from "../redux/uiSlice";
import type { Schedule } from "../types/schedule";

type Props = {
  date: Date;
  currentDate: Date;
};

const DateCell = (props: Props) => {
  const { date, currentDate } = props;
  const allSchedules = useAppSelector((state) => state.schedules);
  const dispatch = useAppDispatch();

  const today = new Date();

  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const isCurrentMonth = date.getMonth() === currentDate.getMonth();

  const getCellClasses = () => {
    const baseClasses =
      "p-2 flex flex-col h-full border-b border-r border-gray-400 overflow-hidden";

    if (isToday) {
      return `${baseClasses} bg-blue-500 text-white font-bold`;
    }

    if (isCurrentMonth) {
      return `${baseClasses} text-black bg-white hover:bg-blue-100`;
    }

    return `${baseClasses} text-gray-400 bg-gray-50`;
  };

  const schedulesForThisDay = allSchedules.filter((schedule: Schedule) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return schedule.date === formattedDate;
  });

  const handleDateClick = () => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    dispatch(selectDate(formattedDate));
    dispatch(openModal());
  };

  const handleScheduleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    schedule: Schedule
  ) => {
    e.stopPropagation();
    dispatch(setEditingSchedule(schedule));
    dispatch(openModal());
  };

  return (
    <div onClick={handleDateClick} className={getCellClasses()}>
      <div className="text-left text-sm md:text-base font-semibold flex-shrink-0">{date.getDate()}</div>
      <div className="flex-grow overflow-y-auto pr-1 space-y-1 min-h-0 h-0">
        {schedulesForThisDay.slice(0, 2).map((schedule) => (
          <div
            onClick={(e) => handleScheduleClick(e, schedule)}
            key={schedule.id}
            className="text-xs truncate bg-blue-200 hover:bg-blue-300 cursor-pointer p-1 rounded"
          >
            {schedule.title}
          </div>
        ))}
        {schedulesForThisDay.length > 2 && (
          <div className="text-xs text-gray-600">
            +{schedulesForThisDay.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
};

export default DateCell;
