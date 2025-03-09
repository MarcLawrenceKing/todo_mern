import { FC } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useTodoEdit, TodoStatus, TodoPriority } from "../utils/useTodoEdit";

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

const ToDo: FC<TodoProps> = ({
  title,
  description,
  status,
  dueDate,
  priority,
  createdAt,
}) => {
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

  // ✅ Set default values for status & priority
  const defaultStatus =
    todoStatuses.find((s) => s.status === status) || todoStatuses[0];
  const defaultPriority =
    todoPriorities.find((p) => p.priority === priority) || todoPriorities[0];

  const {
    isEditing,
    selectedStatus,
    selectedPriority,
    dueDateValue,
    updatedAt,
    toggleEditMode,
    handleSelectStatus,
    handleSelectPriority,
    handleDueDateChange,
  } = useTodoEdit(defaultStatus, defaultPriority, dueDate);
  return (
    <div className="w-72 h-auto bg-bgcolor2 text-black text-sm p-3 rounded-xl transition-all md:text-base ">
      <h2 className="text-base font-bold md:text-lg">{title}</h2>
      <p className="text-gray-600">{description}</p>

      <div className="mt-2 text-sm">
        <div>
          <strong>Status:</strong>{" "}
          <Dropdown
            options={todoStatuses}
            onSelect={handleSelectStatus}
            defaultValue={selectedStatus}
            isEditable={isEditing}
          />
        </div>
        <div>
          <strong>Priority:</strong>{" "}
          <Dropdown
            options={todoPriorities}
            onSelect={handleSelectPriority}
            defaultValue={selectedPriority}
            isEditable={isEditing}
          />
        </div>
        <p>
          <strong>Due Date:</strong> {new Date(dueDate).toLocaleString()}
        </p>

        <p>
          <strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {updatedAt}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-2 gap-2 justify-items-center">
        <Button
          label={isEditing ? "Save" : "Update"}
          iconName={isEditing ? "circle-check" : "circle-arrow-up"}
          onClick={toggleEditMode}
          variant="secondary"
          className={
            isEditing
              ? "text-low-done-bg bg-low-done"
              : "text-med-ongo-bg bg-med-ongo"
          }
        />
        <Button
          label="Delete"
          iconName="trash-2"
          onClick={() => alert("Delete Clicked")}
          variant="secondary"
          className="text-high-pend-bg bg-high-pend"
        />
      </div>
    </div>
  );
};

export default ToDo;
