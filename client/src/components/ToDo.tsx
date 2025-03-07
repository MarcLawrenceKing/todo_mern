import { useState } from "react";
import { FC } from "react";
import Dropdown from "./Dropdown";
import { DropdownOption } from "./Dropdown";

type TodoStatus = "PENDING" | "DONE" | "ONGOING";
type TodoPriority = "HIGH" | "MEDIUM" | "LOW";

interface TodoStatusObject {
  status: TodoStatus;
  label: string;
  textColor: string;
  bgColor: string;
}

interface TodoPriorityObject {
  priority: TodoPriority;
  label: string;
  textColor: string;
  bgColor: string;
}
interface TodoProps {
  title: string;
  description: string;
  status: TodoStatus;
  dueDate: string;
  priority: TodoPriority;
  createdAt: string;
}

const todoStatuses: TodoStatusObject[] = [
  {
    status: "PENDING",
    label: "PENDING",
    textColor: "text-high-pend",
    bgColor: "bg-high-pend-bg",
  },
  {
    status: "ONGOING",
    label: "ONGOING",

    textColor: "text-med-ongo",
    bgColor: "bg-med-ongo-bg",
  },
  {
    status: "DONE",
    label: "DONE",
    textColor: "text-low-done",
    bgColor: "bg-low-done-bg",
  },
];

const todoPriorities: TodoPriorityObject[] = [
  {
    priority: "HIGH",
    label: "HIGH",
    textColor: "text-high-pend",
    bgColor: "bg-high-pend-bg",
  },
  {
    priority: "MEDIUM",
    label: "MEDIUM",
    textColor: "text-med-ongo",
    bgColor: "bg-med-ongo-bg",
  },
  {
    priority: "LOW",
    label: "LOW",
    textColor: "text-low-done",
    bgColor: "bg-low-done-bg",
  },
];

const ToDo: FC<TodoProps> = ({
  title,
  description,
  status,
  dueDate,
  priority,
  createdAt,
}) => {
  // ✅ Set default values for status & priority
  const defaultStatus =
    todoStatuses.find((s) => s.status === status) || todoStatuses[0];
  const defaultPriority =
    todoPriorities.find((p) => p.priority === priority) || todoPriorities[0];

  // ✅ State for dropdown selections
  const [selectedStatus, setSelectedStatus] = useState(defaultStatus);
  const [selectedPriority, setSelectedPriority] = useState(defaultPriority);

  // ✅ Handle selection changes
  const handleSelectStatus = (option: DropdownOption) => {
    const selected = todoStatuses.find((s) => s.label === option.label);
    if (selected) {
      setSelectedStatus(selected);
    }
  };

  const handleSelectPriority = (option: DropdownOption) => {
    const selected = todoPriorities.find((p) => p.label === option.label);
    if (selected) {
      setSelectedPriority(selected);
    }
  };

  const [updatedAt, setUpdatedAt] = useState<string>(
    new Date().toLocaleString()
  );

  return (
    <div className="w-72 h-auto bg-bgcolor2 text-black text-sm p-3 rounded-xl transition-all md:text-base ">
      <h2 className="text-base font-bold md:text-lg">{title}</h2>
      <p className="text-gray-600">{description}</p>

      <div className="mt-2 text-sm">
        <div>
          <strong>Status:</strong>{" "}
          <Dropdown
            options={todoStatuses}
            onSelect={handleSelectPriority}
            defaultValue={selectedStatus}
          />
        </div>
        <p>
          <strong>Due Date:</strong> {new Date(dueDate).toLocaleString()}
        </p>
        <div>
          <strong>Priority:</strong>{" "}
          <Dropdown
            options={todoPriorities}
            onSelect={handleSelectPriority}
            defaultValue={selectedPriority}
          />
        </div>
        <p>
          <strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {updatedAt}
        </p>
      </div>
    </div>
  );
};

export default ToDo;
