import { useAppDispatch } from "../redux/hooks";
import { closeModal } from "../redux/uiSlice";

const ScheduleModal = () => {
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    // 1. オーバーレイ: 画面全体を覆い、クリックイベントを捕捉するために使います。
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black/70 flex justify-center items-center"
    >
      {/* 2. モーダル本体: フォームなどのコンテンツを配置します。 */}
      <div
        onClick={handleModalContentClick}
        className="bg-white p-8 rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">新しい予定</h2>

        {/* ここに後でフォームを追加します */}
        <p>フォームの入力項目がここに入ります。</p>

        {/* 3. ボタン類: 保存やキャンセルボタンを配置します。 */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleCloseModal}
            className="mr-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            キャンセル
          </button>
          <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
