import { useAppDispatch } from "../redux/hooks";
import { openModal, selectDate } from "../redux/uiSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    dispatch(selectDate(formattedDate));
    dispatch(openModal());
  };

  return (
    <header className="flex justify-between items-center p-3 md:p-4 bg-blue-600 text-white">
      <h1 className="text-xl md:text-2xl font-bold">My Calendar</h1>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm md:text-base font-bold py-1.5 px-3 md:py-2 md:px-4 rounded"
      >
        新規予定
      </button>
    </header>
  );
};

export default Header;
