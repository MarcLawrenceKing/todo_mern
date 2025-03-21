import { useState } from "react";
import { DropdownOption } from "../components/Dropdown";

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

  const toggleEditMode = () => {
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
    toggleEditMode,
    handleSelectStatus,
    handleSelectPriority,
    handleDueDateChange,
  };
}
