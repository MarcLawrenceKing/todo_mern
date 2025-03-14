import { useState, FC } from "react";
import { createPortal } from "react-dom";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: FC<AddModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState<string>("");

  const handleSubmit = () => {
    const newItem = { title, description, status, priority, dueDate };
    console.log("New Item:", newItem);
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center z-3 ${
        isOpen ? "block" : "hidden"
      } backdrop-blur-lg`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Add New Item
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        ></textarea>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          onClick={handleSubmit}
          className="w-full text-white p-2 rounded bg-primary"
        >
          Add
        </button>
        <button
          onClick={onClose}
          className="w-full text-white p-2 rounded mt-2 bg-accent2"
        >
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};

export default AddModal;
