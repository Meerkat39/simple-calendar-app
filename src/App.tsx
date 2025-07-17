import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import CalendarNavigation from "./components/CalendarNavigation";
import { DayOfWeek } from "./components/DayOfWeek";
import Header from "./components/Header";
import ScheduleModal from "./components/ScheduleModal";
import { useCalendar } from "./hooks/useCalendar";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { currentDate, handlePrevMonth, handleNextMonth, calendarGrid } =
    useCalendar();

  const { isModalOpen } = useAppSelector((state) => state.ui);

  return (
    <>
      <Header />
      <CalendarNavigation
        currentDate={currentDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <DayOfWeek />
      <CalendarGrid calendarGrid={calendarGrid} currentDate={currentDate} />
      {isModalOpen && <ScheduleModal />}
    </>
  );
}

export default App;
