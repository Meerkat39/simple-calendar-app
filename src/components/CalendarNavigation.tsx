const CalendarNavigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">←前月</button>
      <h2 className="text-xl font-semibold">2025年7月</h2>
      <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">次月→</button>
    </nav>
  );
};

export default CalendarNavigation;
