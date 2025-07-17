import { useAppSelector } from "../redux/hooks";

type Props = {
  date: Date;
  currentDate: Date;
};

const DateCell = (props: Props) => {
  const { date, currentDate } = props;
  const allSchedules = useAppSelector((state) => state.schedules);

  const today = new Date();

  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const isCurrentMonth = date.getMonth() === currentDate.getMonth();

  const getCellClasses = () => {
    const baseClasses =
      "p-2 h-24 transition-colors duration-200 ease-in-out border-b border-r border-gray-400";

    if (isToday) {
      return `${baseClasses} bg-blue-500 text-white font-bold`;
    }

    if (isCurrentMonth) {
      return `${baseClasses} text-black bg-white hover:bg-blue-100`;
    }

    return `${baseClasses} text-gray-400 bg-gray-50`;
  };

  return (
    <div className={getCellClasses()}>
      <div>{date.getDate()}</div>
      {allSchedules.filter((schedule)=>schedule.date===today)}
    </div>
  );
};

export default DateCell;
