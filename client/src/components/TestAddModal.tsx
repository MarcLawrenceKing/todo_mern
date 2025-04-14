import { createPortal } from "react-dom";

const TestAddModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-2">
      <div className="bg-white p-4 rounded ">
        <input
          className="border p-2 rounded mb-2 block w-full"
          placeholder="Enter something"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Add
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TestAddModal;
