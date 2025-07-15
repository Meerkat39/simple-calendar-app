import DateCell from "./DateCell";

type Props = {
  calendarGrid: () => Date[];
};

const CalendarGrid = (props: Props) => {
  const { calendarDays } = props;

  const rows = Array(6).fill(null);
  const cols = Array(7).fill(null); // 7列に修正

  return (
    <div className="grid grid-cols-7 border border-collapse">
      {" "}
      {/* border-t border-l を border に変更し、border-collapse を追加 */}
      {rows.map((_, rowIndex) => {
        return (
          <div key={rowIndex} className="contents">
            {" "}
            {/* 行のラッパーにcontentsクラスを追加 */}
            {cols.map((_, colIndex) => {
              return <DateCell key={`${rowIndex}-${colIndex}`} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
