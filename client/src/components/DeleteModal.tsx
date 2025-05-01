import { FC } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-3 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-accent3">
          Confirm Deletion
        </h2>
        <p className="mb-4">Are you sure you want to delete this todo item?</p>
        <div className="flex justify-center gap-10">
          <Button onClick={onClose} className="bg-accent2">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-accent3">
            Delete
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};

export default DeleteModal;
