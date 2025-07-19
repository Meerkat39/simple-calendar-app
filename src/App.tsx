import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import CalendarNavigation from "./components/CalendarNavigation";
import { DayOfWeek } from "./components/DayOfWeek";
import Header from "./components/Header";
import ScheduleModal from "./components/ScheduleModal";
import { useCalendar } from "./hooks/useCalendar";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { currentDate, handlePrevMonth, handleNextMonth, calendarGrid, numberOfWeeks } =
    useCalendar();

  const { isModalOpen } = useAppSelector((state) => state.ui);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col">
      <div className="w-full bg-white shadow-lg rounded-lg flex flex-col flex-grow overflow-hidden">
        <Header />
        <CalendarNavigation
          currentDate={currentDate}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
        />
        <DayOfWeek />
        <CalendarGrid calendarGrid={calendarGrid} currentDate={currentDate} numberOfWeeks={numberOfWeeks} />
      </div>
      {isModalOpen && <ScheduleModal />}
    </div>
  );
}

export default App;
