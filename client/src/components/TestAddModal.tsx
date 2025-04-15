import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";

const TestAddModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", {
        title,
        description,
        status,
        dueDate,
        priority,
      })
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-2">
      <div className="bg-white p-4 rounded ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter title"
          className="border p-2 rounded mb-2 block w-full"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Description"
          className="border p-2 rounded mb-2 block w-full"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="date"
          name=""
          id=""
          className="border p-2 rounded mb-2 block w-full"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDueDate(e.target.value)
          }
        />

        <select
          className="border p-2 rounded mb-2 block w-full"
          value={status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setStatus(e.target.value)
          }
        >
          <option value="" disabled hidden>
            -- Select --
          </option>
          <option value="PENDING">PENDING</option>
          <option value="ONGOING">ONGOING</option>
          <option value="DONE">DONE</option>
        </select>
        <select
          className="border p-2 rounded mb-2 block w-full"
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPriority(e.target.value)
          }
        >
          <option value="" disabled hidden>
            -- Select --
          </option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded">
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TestAddModal;
