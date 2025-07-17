import DateCell from "./DateCell";

type Props = {
  calendarGrid: Date[];
  currentDate: Date;
};

const CalendarGrid = (props: Props) => {
  const { calendarGrid, currentDate } = props;

  return (
    <div className="grid grid-cols-7 border-t border-l border-gray-400">
      {calendarGrid.map((date, index) => (
        <DateCell key={index} date={date} currentDate={currentDate} />
      ))}
    </div>
  );
};

export default CalendarGrid;