import { useState, FC, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  todoStatuses,
  todoPriorities,
  TodoStatus,
  TodoPriority,
} from "../utils/todoConstants"; // Import your types and data

import Dropdown, { DropdownOption } from "./Dropdown";
import DueDatePicker from "./DueDatePicker";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (todo: {
    title: string;
    description: string;
    status: TodoStatus;
    priority: TodoPriority;
    dueDate: string;
    createdAt: string;
  }) => void;
}

const AddModal: FC<AddModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<DropdownOption | null>(
    todoStatuses[0]
  );
  const [selectedPriority, setSelectedPriority] =
    useState<DropdownOption | null>(todoPriorities[1]);
  const [dueDate, setDueDate] = useState<Date | null>(new Date());

  // resets the selected value whenever add modal is opened
  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
      setSelectedStatus(todoStatuses[0]);
      setSelectedPriority(todoPriorities[1]);
      setDueDate(new Date());
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required");
      return;
    }
    const newItem = {
      title,
      description,
      status: selectedStatus?.label as TodoStatus,
      priority: selectedPriority?.label as TodoPriority, // Ensure correct type
      dueDate: dueDate ? dueDate.toISOString() : new Date().toISOString(), // Convert Date to string
      createdAt: new Date().toISOString(), // Set current timestamp
    };
    console.log("New Item:", newItem);
    onSave(newItem);
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
        <div className="mb-3 flex flex-row gap-2">
          <label className="block font-semibold mb-1">Status</label>
          <Dropdown
            options={todoStatuses}
            onSelect={setSelectedStatus}
            defaultValue={todoStatuses[0]}
            isEditable={true}
          />
        </div>
        <div className="mb-3 flex flex-row gap-2">
          <label className="block font-semibold mb-1">Priority</label>
          <Dropdown
            options={todoPriorities}
            onSelect={setSelectedPriority}
            defaultValue={todoPriorities[1]}
            isEditable={true}
          />
        </div>
        <div className="mb-3 flex flex-row gap-2">
          <label className="block font-semibold mb-1">Due Date</label>
          <DueDatePicker
            dueDate={dueDate || new Date()}
            onChange={setDueDate}
            isEditable={true}
            className={"w-50"}
          />
        </div>
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
