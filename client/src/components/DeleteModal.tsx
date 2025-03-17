import { FC } from "react";
import { createPortal } from "react-dom";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-3 backdrop-blur-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-accent3">
          Confirm Deletion
        </h2>
        <p className="mb-4">Are you sure you want to delete this todo item?</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="w-1/2 text-black p-2 rounded bg-secondary mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-1/2 text-white p-2 rounded bg-accent2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};

export default DeleteModal;
