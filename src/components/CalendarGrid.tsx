import DateCell from "./DateCell";

type Props = {
  calendarGrid: Date[];
  currentDate: Date;
  numberOfWeeks: number; // 追加
};

const CalendarGrid = (props: Props) => {
  const { calendarGrid, currentDate, numberOfWeeks } = props;

  const gridRowsClass = `grid-rows-${numberOfWeeks}`;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-7 ${gridRowsClass} h-full border-t border-l border-gray-400 flex-grow`}>
      {calendarGrid.map((date, index) => (
        <DateCell key={index} date={date} currentDate={currentDate} />
      ))}
    </div>
  );
};

export default CalendarGrid;