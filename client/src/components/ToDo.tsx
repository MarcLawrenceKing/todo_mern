import { FC } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useTodoEdit } from "../utils/useTodoEdit";
import {
  todoPriorities,
  todoStatuses,
  TodoProps,
} from "../utils/todoConstants";
import DueDatePicker from "./DueDatePicker";

const ToDo: FC<TodoProps> = ({
  title,
  description,
  status,
  dueDate,
  priority,
  createdAt,
  onDelete = () => {},
}) => {
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
    handleDelete,
  } = useTodoEdit(defaultStatus, defaultPriority, dueDate, onDelete);

  return (
    <div className="flex flex-col gap-2 w-72 h-auto bg-white text-black text-sm p-3 rounded-xl transition-all md:text-base ">
      <h2 className="text-base font-bold md:text-lg">{title}</h2>
      <p className="text-gray-600">{description}</p>

      <div className="mt-2 text-sm flex flex-col gap-2">
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
        <div className="flex flex-row gap-2">
          <strong>Due Date:</strong>
          <DueDatePicker
            isEditable={isEditing}
            dueDate={new Date(dueDateValue)}
            onChange={handleDueDateChange}
          />
        </div>

        <p>
          <strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {updatedAt}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-2 justify-items-center">
        <Button
          label={isEditing ? "Save" : "Update"}
          iconName={isEditing ? "circle-check" : "circle-arrow-up"}
          onClick={toggleEditMode}
          variant="secondary"
          className={
            isEditing ? "text-white bg-primary" : "text-black bg-secondary"
          }
        />
        <Button
          label="Delete"
          iconName="trash-2"
          onClick={handleDelete}
          variant="secondary"
          className="text-white bg-accent2"
        />
      </div>
    </div>
  );
};

export default ToDo;
