import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addSchedule } from "../redux/scheduleSlice";
import { closeModal } from "../redux/uiSlice";
import { type ScheduleCategory } from "../types/schedule";

const ScheduleModal = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ScheduleCategory>("work");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const { selectedDate } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSave = () => {
    if (!selectedDate) {
      alert("日付が選択されていません。");
      return;
    }

    if (!title) {
      alert("タイトルを入力してください。");
      return;
    }

    dispatch(
      addSchedule({
        title,
        date: selectedDate,
        startTime,
        endTime,
        category,
        description,
      })
    );

    dispatch(closeModal());
    setTitle("");
    setCategory("work");
    setStartTime("");
    setEndTime("");
    setDescription("");
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      onClick={handleCloseModal}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl"
        onClick={handleModalContentClick}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">新しい予定</h2>

        <form>
          <div className="space-y-4">
            {/* タイトル */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                タイトル
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="予定のタイトルを入力"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* カテゴリ */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                カテゴリ
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as ScheduleCategory)
                }
              >
                <option value="work">仕事</option>
                <option value="private">プライベート</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* 時間 */}
            <div className="flex items-center space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="startTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  開始時間
                </label>
                <input
                  type="time"
                  id="startTime"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="endTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  終了時間
                </label>
                <input
                  type="time"
                  id="endTime"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>

            {/* 説明 */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                説明
              </label>
              <textarea
                id="description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="予定の詳細を入力（任意）"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </form>

        {/* ボタン */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleCloseModal}
            className="mr-3 px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
