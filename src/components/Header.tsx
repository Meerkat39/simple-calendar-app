import { useAppDispatch } from "../redux/hooks";
import { openModal } from "../redux/uiSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">My Calendar</h1>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        新規予定
      </button>
    </header>
  );
};

export default Header;
