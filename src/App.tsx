import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import CalendarNavigation from "./components/CalendarNavigation";
import { DayOfWeek } from "./components/DayOfWeek";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <CalendarNavigation />
      <DayOfWeek />
      <CalendarGrid />
    </>
  );
}

export default App;
