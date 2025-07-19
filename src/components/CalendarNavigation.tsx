type Props = {
  currentDate: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
};

const CalendarNavigation = (props: Props) => {
  const { currentDate, handlePrevMonth, handleNextMonth } = props;

  return (
    <nav className="flex justify-between items-center p-3 md:p-4 bg-gray-100">
      <button
        className="px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm md:text-base"
        onClick={handlePrevMonth}
      >
        ←前月
      </button>
      <h2 className="text-lg md:text-xl font-semibold">
        {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
      </h2>
      <button
        className="px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm md:text-base"
        onClick={handleNextMonth}
      >
        次月→
      </button>
    </nav>
  );
};

export default CalendarNavigation;
