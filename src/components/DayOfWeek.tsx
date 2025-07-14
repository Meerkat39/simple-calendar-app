export const DayOfWeek = () => {
  const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div className="grid grid-cols-7 text-center font-bold py-2">
      {dayOfWeek.map((d, index) => {
        return <span key={index}>{d}</span>;
      })}
    </div>
  );
};
