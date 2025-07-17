import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import CalendarNavigation from "./components/CalendarNavigation";
import { DayOfWeek } from "./components/DayOfWeek";
import Header from "./components/Header";
import { useCalendar } from "./hooks/useCalendar";

function App() {
  const { currentDate, handlePrevMonth, handleNextMonth, calendarGrid } =
    useCalendar();

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
    </>
  );
}

export default App;