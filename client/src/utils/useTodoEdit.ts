import { useState } from "react";
import { DropdownOption } from "../components/Dropdown";
import {
  TodoProps,
} from "../utils/todoConstants";

export function useTodoEdit(
  initialStatus: DropdownOption,
  initialPriority: DropdownOption,
  initialDueDate: string,
) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
    // ✅ State for dropdown selections
  const [selectedPriority, setSelectedPriority] = useState(initialPriority);
  const [dueDateValue, setDueDateValue] = useState(initialDueDate);
  const [updatedAt, setUpdatedAt] = useState<string>(new Date().toLocaleString());

  const toggleEditMode = (todos: TodoProps[], setTodos: (todos: TodoProps[]) => void, id: string) => {
    if (isEditing) {
      setUpdatedAt(new Date().toLocaleString());
  
      // Save changes to localStorage
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                status: selectedStatus.label as TodoProps["status"], // Ensure correct enum type
              priority: selectedPriority.label as TodoProps["priority"], // Ensure correct enum type
                dueDate: dueDateValue,
                updatedAt: new Date().toLocaleString(),
              }
            : todo
        )
      );
    }
    setIsEditing(!isEditing);
  };
 // ✅ Handle selection changes
  const handleSelectStatus = (option: DropdownOption) => {
    if (!isEditing) return;
    setSelectedStatus(option);
  };

  const handleSelectPriority = (option: DropdownOption) => {
    if (!isEditing) return;
    setSelectedPriority(option);
  };

  const handleDueDateChange = (date: Date | null) => {
    if (!isEditing || !date) return;
    setDueDateValue(date.toISOString());
  };


  return {
    isEditing,
    selectedStatus,
    selectedPriority,
    dueDateValue,
    updatedAt,
    toggleEditMode,
    handleSelectStatus,
    handleSelectPriority,
    handleDueDateChange,
  };
}
